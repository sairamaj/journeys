# Goal
    Display the cart
____
## Details
____

## UI
___

## Learning
<details>
  <summary>React Context API</summary>

* It is state management tool
* Similar to _Redux_ but simpler
  * Redux is useful for bigger project

* [React Context API: What is it and How it works?](https://www.loginradius.com/blog/engineering/react-context-api/)

</details>

<details>
    <summary>props.children</summary>

[Quick Intro to Props children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
</details>

<details>
    <summary>JavaScript spread operator</summary>

* Expands the elements
* Can be used to create new objet from existing object with either adding new property or modifying existing property without knowing all the properties.
  ```javascrpit
    x = {name: 'sai', age:16}
    y = {...x, age:17}
    z = {...y, gender:'M'}
  ```
</details>

<details>
  <summary>shorthand version of javascript if statement</summary>

  ```js
    x = 2
    y = x > 2 && 'a'
    y will be 'a'
    y = x <2 && 'a'
    y will be false
  ```

  useful in react html generation.
  
</details>

<details>
   <summary>setState update asynchronous</summary>

```txt
In React, state updates are inherently asynchronous processes. When you call the setState function, React schedules an update rather than immediately applying the changes. This allows React to batch multiple state updates together, minimizing unnecessary re-renders and improving overall efficiency.
```
* useEffect to get updates 
  ```javascript
    useEffect(() => {
        updateSubTotal();
    });

  ```

</details>

<details>
  <summary>Build</summary>

```cmd
  yarn build
  ; OR
  npm run build
```
</details>
____

## Resource
[React Shopping Cart Ecommerce Beginner Website](https://www.youtube.com/watch?v=tEMrD9t85v4)
