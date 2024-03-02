import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from './store'

// Start our mock API server
import { worker } from '../src/api/browser'
async function start() {

  console.log('starting...')
  await worker.start({ onUnhandledRequest: 'bypass' })
  console.log('started.')
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

start();