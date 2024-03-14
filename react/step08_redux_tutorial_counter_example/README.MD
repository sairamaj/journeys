# Goal
    Learn Redux with a sample
____
## Details

* create project with redux support
  ```cmd
  npx create-react-app my-app --template redux
  ```
* install redux developer tools
  * [install](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * _Note:_ Open the application again after installing the extension,otherwise sometimes the dev tool does not work as expected.
____

## Learning
<details>
  <summary>Learn Redux</summary>

* [concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
* Redux expects that all state updates are done __immutably__

</details>

<details>
  <summary>Making a copy of object and array (immutable)</summary>

* obj (use spread operator)
```js
  x = { name:'sai', age:16 }  
  y = {...x,age:17}
```
* array
  * use _concat_
  ```js
    x = [1,2,3]
    y = x.concat(4)
  ```
  * use _slice_
  ```js
    x = [1,2,3]
    y = x.slice()
  ```
</details>
