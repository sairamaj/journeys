<details>
<summary>var , let, const</summary>
  
  <details>
    <summary>var</summary>

* defined outside function, globally scoped. (but not outside the file)
* defined in function is function scoped (cannot access outside)
```js
    var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined        
```
* can be redeclared
```js
    var x = "hello"
    var x = "hai";
    x = "something else"
```
* issue with var
```js
var x = "global-x"
console.log(x)
{
    var x = "this will use global x and update"
}
console.log(x)   
```
* using in function (note without var)
```js
var x = "global-x"
console.log(x)
function test(){
    x = "changin in test function"  // using global
}

test(); // function called which changes -x 
console.log(x)   
```
* redeclaring in function (note without var)
```js
var x = "global-x"
console.log(x)
function test(){
    var x = "this won't change global as we have re declared"  // using global
}

test(); // function called which does not change x
console.log(x)   
```

  </details>

___

  <details>
    <summary>let</summary>

* introduced in  _ES6_ 
* preferred over var
* block scoped
  ```js
    let x = "global-x"
    console.log(x)
    {
        let x = "this is scoed to this block and hence wont change global-x"
        console.log(x)
    }
    console.log(x)  
  ```
* can be updated but not _redeclared_
  ```js
    let x = "global-x"
    x = "global-updated"
    console.log(x)
  ```
  ___
  ```js
    let x = "global-x"
    let x = "global-updated"    // this line will error
    console.log(x)
  ```
  </details>

___

  <details>
    <summary>const</summary>


* similar to let in scope
* cannot be updated
  ```js
    const x = "global-x"
    x = "try updating will have error"
  ```
* one has to define the value when declaring
  ```js
    const x = "x value"
    const y     // this is error
  ```
* reference cannot change but value can.
  ```js
    const x = {
        name: 'sai',
        age: 16
    }
    console.log(x)
    // x = { name: 'ram'}      // this will error as you cannot change the referece

    x.name = 'ram'             // value at reference can change
    console.log(x)

    const y = [1,2,3]
    // y = [4,5,6]                 // reference cannot change, this will give error
    y.push(4)
    console.log(y)             // contents can change even though y is constant  
  ```

  </details>

___

  <details>
    <summary>summary</summary>

* __var__ declarations are globally scoped or function scoped while __let__ and __const__ are block scoped.
* __var__ variables can be updated and re-declared within its scope; __let__ variables can be updated but not re-declared; __const__ variables can neither be updated nor re-declared.
* They are all hoisted to the top of their scope. But while __var__ variables are initialized with undefined, __let__ and __const__ variables are not initialized.
* While __var__ and __let__ can be declared without being initialized, __const__ must be initialized during declaration.    

[details](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

  </details>

</details>

___

<details>
  <summary>if else logic assign to a variable</summary>

```js
    age = 10

    // using let keyword to assign the output of logic
    let message

    if (age >= 18) {
      message = "You are an adult.";
    } else if (age >= 13) {
      message = "You are a teenager.";
    } else {
      message = "You are a child.";
    }

    console.log(message)
```
</details>

___

<details>
  <summary>rest parameters</summary>

```js
  // rest operator
  // below we are passig 
  function add(x,y, ...nums){
    console.log('x:', x)
    console.log('y:', y);
    console.log('rest:',nums)
  }

  add(1,2,4,5,6,7)
```
```cmd
x: 1
y: 2
rest: [ 4, 5, 6, 7 ]
```

</details>

___

<details>
  <summary>spread</summary>

```js
  let x = [1, 2, 3]
  let y = [4, 5]
  let z = [7, 8, 9]

  // spread operator to join
  let result = [...x, ...y, ...z]
  console.log(result)
  console.log('---------')

  // extract using spread operator
  const [one, two, ...rest] = result
  console.log('one:', one);
  console.log('two:', two)
  console.log('rest:', rest)
```
```cmd
[
  1, 2, 3, 4,
  5, 7, 8, 9
]
---------
one: 1
two: 2
rest: [ 3, 4, 5, 7, 8, 9 ]  
```

</details>