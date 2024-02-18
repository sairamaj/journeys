# Goal
Add a navigation menu

## Steps
* Adding packages
  * icons and routes
  ```cmd
    yarn add phosphor-react react-router-dom
  ```
* Adding routes in App.js
  ```js
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import { Navbar } from "./components/navbar"

    <Router>
        <Navbar />
        <Routes>
            <Route path="/" />
            <Route path="cart" />
        </Routes>
    </Router>
   
  ```
* Add navbar.jsx and navbar.css


## Learning
  <details>
  <summary>Different between jsx and js extensions in react context</summary>

```txt
JS is simply a scripting language, adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users. JSX is popularly used in React, as it makes the job of building an application much easier
```
[more info](https://www.linkedin.com/pulse/what-difference-between-js-jsx-skill-gain/)
  </details>

## UI
![ui_with_navigation](./ui_with_navigation.png)