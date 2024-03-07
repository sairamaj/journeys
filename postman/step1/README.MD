# Goal
Introduction

## Details
* we will be using postman course at udemy
* api used in testing will be [here](https://github.com/vdespa/quick-introduction-to-postman/blob/main/simple-tool-rental-api.md) 
* use __console__ to view request and responses


<details>
  <summary>variables</summary>

* global variables
* environment variables
* collection variables

* initial is place holder (shared)
* current is actual value being used (cannot see by shared)

* https://__{{base_url}}__/status
* access variable in scripts
  ```js
     console.log(pm.collectionVariables.get("access_token"));
     pm.globals.get("access_token");
  ```
</details>

___

<details>
  <summary>path parameters</summary>

* https://{{base_url}}/tools/__:toolid__
</details>

___

<details>
  <summary>using postman variables</summary>

* one can use built-in variables
  ```json
    {
        "toolId" : 4643,
        "customerName" : "{{$randomFullName}}"
    }
  ```
</details>

___

<details>
  <summary>adding tests</summary>

* in Test tab of request one can add tests

```js
        pm.test("Status code is 200", function () {
            pm.response.to.have.status(200);
        });

        pm.test("Checking for UP", () => {
            const response = pm.response.json();
            pm.expect(response.status).to.eql("UP");
        });
```
___
<details>
  <summary>use runner</summary>

* runner can be used to run collections.
</details>
___
<details>
  <summary>request execution order</summary>

```js
  postman.setNextRequest("next_request_name_here")
  
  // end of the request.
  postman.setNextRequest(null)
```

</details>

___

<details>
  <summary>monitors<summary>

* allow to run collections periodically.
</details>

___

<details>
  <summary>newman cli</summary>

* newman is cli version of postman
* install
  ```js
    npm install -g newman
  ```
* export colletions from postman ui
* run newman command line
  ```cmd
    newman run simple-tool.postman_collection.json
  ```
</details>

___

<details>
  <summary>newman-reporter-htmlextra</summary>

* install
  ```cmd
    npm install -g newman-reporter-htmlextra
  ```
* run with htmlextra
  ```cmd
    newman run simple-tool.postman_collection.json -r htmlextra
  ```
* open newman\simple-tool-2024-03-07-21-03-27-583-0.html

</details>