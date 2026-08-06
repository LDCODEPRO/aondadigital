import urllib.request
import json

url = "http://127.0.0.1:8080/instance/connect/aonda"
headers = {
    "apikey": "AondaDigital_WAPI_Secret_Key_2026_Secure"
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        body = resp.read().decode('utf-8')
        print("CONNECT_BODY:", body)
        data = json.loads(body)
        if "base64" in data:
            with open("/tmp/qrcode_base64.txt", "w") as f:
                f.write(data["base64"])
            print("FOUND_BASE64_IN_TOP_LEVEL")
        elif "code" in data:
            print("FOUND_CODE:", data["code"])
        elif "qrcode" in data and isinstance(data["qrcode"], dict):
            print("FOUND_QRCODE_DICT_KEYS:", list(data["qrcode"].keys()))
            if "base64" in data["qrcode"]:
                with open("/tmp/qrcode_base64.txt", "w") as f:
                    f.write(data["qrcode"]["base64"])
                print("FOUND_BASE64_IN_QRCODE")
            if "code" in data["qrcode"]:
                print("FOUND_CODE_IN_QRCODE:", data["qrcode"]["code"])
except Exception as e:
    print("ERR:", str(e))
