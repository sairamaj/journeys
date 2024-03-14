# Goal
Learn __RTK Query__ in react. we will use tutorai [here](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics).

___

## Steps
* Copy step13 project which has everything up to tutorial part 5.
* Build and run the UI to make sure it is working as expected.

<details>
  <summary>apiSlice</summary>

* add feature/api/apiSlice.js
</details>

<details>
  <summary>adding it to store</summary>

```js
import { apiSlice } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
```
</details>

<details>
  <summary>using query to display posts<summary>

* change PostList.js to use __useGetPostsQuery__
* remove selectors, useEffect

</details>
___

## Learning

<details>
    <summary>overview</summary>

RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

* managing cached data 
  * where the data is coming from
  * how should this update to be sent
  * when should this cache data to be refetched.
  * how should be cache data be updated.

* two apis
  * __creatrApi()__ to define set of end points (to communicate to API server)
    * one API slice per base URL.
  * __fetchBaseQuerh()__ wrapper around __fetch__ that aims to simplify requests.

* __queries__ for feteching data and __mutations__ for updating the data on the server.
</details>

___

<details>
  <summary>useMemo</summary>

* The React useMemo Hook returns a memoized value.
* Think of memoization as caching a value so that it does not need to be recalculated.
* The useMemo Hook only runs when one of its dependencies update.
* This can improve performance.
</details>