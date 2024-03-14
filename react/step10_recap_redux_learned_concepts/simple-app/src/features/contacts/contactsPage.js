import React from 'react';
import { useSelector } from 'react-redux';

export const Contacts = () => {

    const contacts = useSelector(state => state.contacts)

    const renderedContacts = contacts.map(contact => (
        <div>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </div>
    ));
    return (
        <div align="center">
            <h3>Contacts</h3>
            <table>
                {renderedContacts}
            </table>
        </div>
    )
}