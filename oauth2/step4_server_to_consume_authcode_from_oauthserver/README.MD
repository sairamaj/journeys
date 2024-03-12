# Goal
We will build a simple Python server to consume the authorization code from an OAuth2 server and obtain an access token.

## Steps

In the OAuth authorization flow, the user will be redirected to the web server from their browser with an authorization code. The server can then exchange this code to obtain an access token.

<details>
  <summary>initial api server using flask</summary>

* install flask
  ```cmd
    pip install Flask
  ```
* app.py
```python
# https://www.moesif.com/blog/technical/api-development/Building-RESTful-API-with-Flask/
import json
from flask import Flask, jsonify, request

app = Flask(__name__)


employees = [ { 'id': 1, 'name': 'Ashley' }, { 'id': 2, 'name': 'Kate' }, { 'id': 3, 'name': 'Joe' }]

@app.route('/employees', methods=['GET'])
def get_employees():
 return jsonify(employees)

if __name__ == '__main__':
   app.run(port=5000)  
```

* run the server
  ```cmd
    python app.py
  ```
* test it
  ```cmd
    http://127.0.0.1:5000/employees 
  ```
</details>

___

<details>
    <summary>adding /code to consume authorization code</summary>

</details>

____

<details>
  <summary>add localhost uri in redirects</summary>

![clientcredential_add_uri](./clientcredential_add_uri.png)

</details>