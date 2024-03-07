<details>
   <summary>promise</summary>

[promise simply explained](https://www.freecodecamp.org/news/javascript-promise-object-explained/)

![promise](https://www.freecodecamp.org/news/content/images/2023/11/promise-object--1-.png)

* basic promise
```js
    let p = new Promise((resolve, reject) => {
        let isTrue = true;
        if (isTrue) {
        resolve('Success');
        } else {
        reject('Error');
        }
    });
    
    p
    .then(message => console.log(`Promise resolved: ${message}`))
    .catch(message => console.log(`Promise rejected: ${message}`));
```

* fetch using promise
```js
console.log('fetching...')
var promise = fetch('https://simple-tool-rental-api.glitch.me/tools')
  .then(response => console.log(response))
  .catch(error => console.log(error));
console.log('fetch started:', promise)
```
```cmd
fetching...
fetch started: Promise { <pending> }
Response {
```

* promise.all
```js
    const p1 = Promise.reject('Error From Promise One');
    const p2 = Promise.resolve(200);
    const p3 = Promise.resolve('Finished');

    console.log('promose all started')
    let p = Promise.all([p1, p2, p3])
        .then(messages => console.log(messages))
        .catch(error => console.log(error));

    console.log("promise from all", p)
```


* promise all settled
```js
const p4 = Promise.reject('p4:Error From Promise One');
const p5 = Promise.resolve(200);
const p6 = Promise.resolve('p5:Finished');

Promise.allSettled([p4, p5, p6]).then(response => {
  console.log(response);
});
```
```cmd
[
  { status: 'rejected', reason: 'p4:Error From Promise One' },
  { status: 'fulfilled', value: 200 },
  { status: 'fulfilled', value: 'p5:Finished' }
]
```

</details>

___

<details>
   <summary>async/await</summary>

[async/await with examples](https://www.freecodecamp.org/news/javascript-async-await/)

```js
    const apiCaller = async() => {
        var response = await fetch('https://simple-tool-rental-api.glitch.me/tools')
        console.log(response)
    }

    apiCaller();

```
</details>
