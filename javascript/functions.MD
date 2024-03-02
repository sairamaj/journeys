<details>
  <summary>basic syntax</summary>

```js
    // given name : add with 2 variables and returns the sum
    function add(x, y) {
    return x + y
    }

    // calling function with 2 inputs.
    z = add(2, 3)
    console.log(z)
```
</details>

___

<details>
  <summary>arrow functions</summary>

```js
    // arrow function no inputs
    let sayHello = () => console.log('hello')
    sayHello();

    // arrow function one input
    let sayHello2 = (msg) => console.log(msg)
    sayHello2('hai first time')
    sayHello2('hai second time')

    // implicit return
    let add = (x,y) => x+y;
    console.log(add(2,3))
    console.log(add(3,4))

```
</details>

___

<details>
   <summary>function returning functions</summary>

```js
    // function returning function
    function getAddFunc() {
        return function add(x, y) {
            return x + y;
        }
    }

    let addFunc = getAddFunc();
    console.log(addFunc)
    // now call addFunc to execute
    console.log(addFunc(2,3));

    // arrow function simplifies it
    const getAddFunc2 = () => (x,y)=> x+y;
    console.log( getAddFunc2()(3,4));

```

</details>