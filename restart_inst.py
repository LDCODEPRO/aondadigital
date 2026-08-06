import urllib.request
import json

url = "http://127.0.0.1:8080/instance/restart/aonda"
headers = {
    "apikey": "AondaDigital_WAPI_Secret_Key_2026_Secure"
}

req = urllib.request.Request(url, headers=headers, method='PUT')
try:
    with urllib.request.urlopen(req) as resp:
        print("RESTART_RES:", resp.read().decode('utf-8'))
except Exception as e:
    print("ERR:", str(e))
