# Goal
API integration in redux tutorial

## Details

<details>
  <summary>Copy step9 project</summary>

* Make sure it works as expected 
  * Build and Run
    ```cmd
      npm install
      npm start
    ``` 
  * Visiting the web site and see that posts appear

</details>

___

## Learning

<details>
  <summary>useEffect hook</summary>

* used in running a code when something happens (some side effect)
* like component reacting to when data is fetechted.
* syntax
  ```js
    useEffect(() => {
    // Side effect code goes here
    // This code will run after every render
    
    return () => {
    // Cleanup code goes here
  };
  },[dependency1,dependency2]);
  ```
  * the above code will run whenever _dependency1_ or _dependency2_ changes
  * passing empty array _[]_ means run only once.
  * conditional dependecy (_functional dependency_)
    * you can add conditions in dependency like below
    ```js
      useEffect(() => 
        // Code to run when dependencies change
      }, [() => isLoading]);      
    ```

[resource](https://www.linkedin.com/pulse/beginners-guide-useeffect-react-exploring-its-use-cases-tochukwu/)

</details>

___

<details>
  <summary>axios</summary>

* http client library to make request to end point(api requests)
* you can use this in _react_ and also in _nodejs_ (in server side)
* using in nodejs
  ```js
  const axios = require('axios');

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));  
  ```

[how to use in react](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)

[how to use in nodejs](https://circleci.com/blog/making-http-requests-with-axios/)

[custom fetch wrapper instead of axios ](https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper)

</details>

___

<details>
  <summary>redux-thunk</summary>

* allows to write plain funtions that may contain async logic
* see the flow diagram [here](https://redux.js.org/tutorials/essentials/part-5-async-logic) to understand more.

[basics of thunk explined here](https://daveceddia.com/what-is-a-thunk/)

</details>

___

<details>
  <summary>writing reusbale selectors</summary>

* To abstract the data from components we can write reusuable selectors in _slices_.
* this way if structure of state changes, all the components need not change.
* example
  * Originally post state has like below
  ```js
    state = [

    ]
  ```
  * components were accessing like
  ```js
    const posts = useSelector(state => state.posts))
  ```
  * during development state has been refactored like below
  ```js
    state = {
      posts: [],
      error: null,
    }
  ```
  * instead of changing all the components , we can create selectors in the slice to hide the details of state struture.
  ```js
    export const selectAllPosts = state => state.posts.posts
  ``` 
  * Now components can use 
  ```js
    const posts = useSelector(selectAllPosts)
  ```
  * If state structure changes tomorrow, we need a change in the reusuable selector in slice without needing to change in the components.

</details>