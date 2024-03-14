import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from 'react-redux'
import { store } from './store'

const root = createRoot(document.getElementById("app"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);