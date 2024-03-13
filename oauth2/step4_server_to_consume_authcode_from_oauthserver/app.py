# https://www.moesif.com/blog/technical/api-development/Building-RESTful-API-with-Flask/
import json
from flask import Flask, jsonify, request
import requests


app = Flask(__name__)


employees = [ { 'id': 1, 'name': 'Ashley' }, { 'id': 2, 'name': 'Kate' }, { 'id': 3, 'name': 'Joe' }]

# for testing API
@app.route('/employees', methods=['GET'])
def get_employees():
 return jsonify(employees)

#
#  This is the call coming from OAuth2 server
#  GET /callback?state=state_1234&code=4/0AeaYSHBaRA4inZmzmPgDN0zX-rI0ncFwgfLnxBd7yU3TR31PzLP_eBJEkkBUBOFQ2Ty3gA&scope=profile+https://www.googleapis.com/auth/userinfo.profile HTTP/1.1
#
@app.route('/callback', methods=['GET'])
def on_callback_from_authserver():
    print("callback from auth server")
    print(f"query string {request.query_string}")
    code = request.args.get('code')
    print(f"code:{code}")

    # POST https://api.authorization-server.com/token
    #   grant_type=authorization_code&
    #   code=AUTH_CODE_HERE&
    #   redirect_uri=REDIRECT_URI&
    #   client_id=CLIENT_ID&
    #   client_secret=CLIENT_SECRET

    access_token_url = 'https://accounts.google.com/o/oauth2/token'
    data = {
    'grant_type': 'authorization_code',
    'code' : code,
    'client_id' : '<clientid_here>',
    'client_secret' : '<client_secret>',
    'redirect_uri' : "http://localhost:5000/callback"
    }
    
    response = requests.post(access_token_url,data)
    print(response.json())
    return response.json(),200
    
if __name__ == '__main__':
   app.run(port=5000)