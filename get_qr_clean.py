import urllib.request
import json

url = "http://127.0.0.1:8080/instance/connect/aonda"
headers = {
    "apikey": "AondaDigital_WAPI_Secret_Key_2026_Secure"
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("KEYS:", list(data.keys()))
        if "base64" in data:
            print("BASE64_LEN:", len(data["base64"]))
            with open("/tmp/qrcode_base64.txt", "w") as f:
                f.write(data["base64"])
        elif "code" in data:
            print("CODE:", data["code"])
        else:
            print("FULL_DATA:", json.dumps(data)[:300])
except Exception as e:
    print("ERR:", str(e))
