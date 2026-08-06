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
        print("CONNECT_FULL_RAW:", body)
except Exception as e:
    print("ERR:", str(e))
