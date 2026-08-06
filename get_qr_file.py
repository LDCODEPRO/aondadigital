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
        b64 = res.get("base64") or (isinstance(res.get("qrcode"), dict) and res["qrcode"].get("base64"))
        code = res.get("code") or (isinstance(res.get("qrcode"), dict) and res["qrcode"].get("code"))
        if b64:
            if b64.startswith("data:image"):
                b64 = b64.split(",")[1]
            with open("/tmp/whatsapp_qr.png", "wb") as f:
                f.write(base64.b64decode(b64))
            print("SUCCESS_PNG_SAVED")
        elif code:
            print("PAIRING_CODE:", code)
        else:
            print("RES_NO_QR:", json.dumps(res))
except Exception as e:
    print("ERR:", str(e))
