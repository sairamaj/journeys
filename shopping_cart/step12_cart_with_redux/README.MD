# Goal
  Change the previously used _Context API_ store management for shopping cart to use _Redux_.
____
## Details

<details>
  <summary>initial app from step7</summary>

* make a copy of step7 where we have used _context api_ for state management.
* make sure the app is working as expected
  * adding to cart and checking count and total in shopping cart.
</details>

____

<details>
  <summary>removing existing context api</summary>

* delete context directory
* remove context reference in
  * app.js
  * cart-item.jsx
  * cart.jsx
* we will see errors related to cart items
* time to add _redux_ now
</details>

___

<details>
  <summary>install packages</summary>

```cmd
  npm install @reduxjs/toolkit
  npm install react-redux
```
</details>

___

<details>
  <summary>cart state</summary>

* add cartSlice.js
```js
    import { createSlice } from '@reduxjs/toolkit'

    // no cart items
    const initialState = [
    ]

    const cartSlice = createSlice({
        name: 'cart',
        initialState
    })

    export default cartSlice.reducer
```

* add store.js
```js
    import { configureStore } from '@reduxjs/toolkit'
    import cartReducer from './pages/cart/cartSlice'

    export const store = configureStore({
        reducer: {
            cart: cartReducer
        },
    })
```
</details>

___

<details>
 <summary>updating cartItems</summary>

* whereever we have variable _cartItems_ we need modify such that we get from store using selector.
```js
  import { useSelector } from 'react-redux';
  const cartItems = useSelector(state => state.cart)
```
</details>

___

<details>
  <summary>store provider in index.js</summary>

```js
    import { Provider } from 'react-redux'
    import { store } from './store'

    <Provider store={store}>
      <App />
    </Provider>
```
</details>

___

<details>
  <summary>fixing the cart page</summary>

* we have main page displaying the products but cart page shows error 

</details>

___
<details>
  <summary>adding cartSlice</summary>

* add cartSlice.js with add,remove and update reducers
* reference these functions in product,cart and cart item pages

</details>

____
