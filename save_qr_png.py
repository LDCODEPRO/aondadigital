import urllib.request
import json
import base64

url = "http://127.0.0.1:8080/instance/connect/aonda"
headers = {
    "apikey": "AondaDigital_WAPI_Secret_Key_2026_Secure"
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        print("KEYS:", list(res.keys()))
        b64 = res.get("base64") or (res.get("qrcode") and res["qrcode"].get("base64"))
        if b64:
            if b64.startswith("data:image/png;base64,"):
                b64 = b64.split(",")[1]
            with open("/tmp/whatsapp_qr.png", "wb") as f:
                f.write(base64.b64decode(b64))
            print("SAVE_PNG_SUCCESS")
        else:
            print("FULL:", json.dumps(res))
except Exception as e:
    print("ERR:", str(e))
