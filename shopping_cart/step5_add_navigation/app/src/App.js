import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar"

function App() {
    return (
        <dev classname="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="cart" />
                </Routes>
            </Router>
        </dev>
    )
}

export default App;