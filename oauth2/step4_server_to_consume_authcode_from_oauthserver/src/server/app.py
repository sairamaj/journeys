# https://www.moesif.com/blog/technical/api-development/Building-RESTful-API-with-Flask/
import json
from flask import Flask, jsonify, request

app = Flask(__name__)


employees = [ { 'id': 1, 'name': 'Ashley' }, { 'id': 2, 'name': 'Kate' }, { 'id': 3, 'name': 'Joe' }]

@app.route('/employees', methods=['GET'])
def get_employees():
 return jsonify(employees)

@app.route('/callback', methods=['POST'])
def on_callback_from_authserver():
    print("callback from auth server")
    return jsonify({}),200
    
if __name__ == '__main__':
   app.run(port=5000)