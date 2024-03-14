import { React } from 'react';
import { AddContactForm } from '../features/contacts/AddContactForm';
import { Contacts } from '../features/contacts/contactsPage';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import { Navbar } from '../Navbar'

export default function App() {
    return <Router>
        <Navbar />
        <div className="App">
            <Routes>
                <Route element={<Contacts />} path="/" />
                <Route element={<AddContactForm />} path="/add" />
            </Routes>
        </div>

    </Router>;
}