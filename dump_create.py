import urllib.request
import json

url = "http://127.0.0.1:8080/instance/create"
headers = {
    "apikey": "AondaDigital_WAPI_Secret_Key_2026_Secure",
    "Content-Type": "application/json"
}
data = {
    "instanceName": "aonda",
    "token": "aonda_token_secret",
    "qrcode": True,
    "integration": "WHATSAPP-BAILEYS"
}

req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers, method='POST')
try:
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        print("DUMP:", json.dumps(res))
except Exception as e:
    print("ERR:", str(e))
