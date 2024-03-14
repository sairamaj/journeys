import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact } from './contactsSlice'

export const Contacts = () => {

    const dispatch = useDispatch()
    const contactsStatus = useSelector(state => state.contacts.status)
    const error = useSelector(state => state.contacts.error)
    const contacts = useSelector(state => state.contacts.contacts)

    useEffect(() => {
        console.log(`contactsStatus: ${contactsStatus}`)
        if (contactsStatus === 'idle') {
            console.log('Contacts will be retrived on page load.')
            dispatch(fetchContacts())
        }
    }, [contactsStatus, dispatch])

    let content
    if (contactsStatus == 'loading' || contactsStatus == "idle") {
        content = <div>loading</div>
    } else if (contactsStatus == "succeeded") {
        content = contacts.map(c => {
            return <div key={c.name}>{c.name}</div>
        })
    } else {
        content = <div>{error}</div>
    }
    const saveContact = () => {
        console.log('adding contact here.')
        dispatch(
            addContact({ name: 'new-contact', email: 'new-contact@abc.com', phone: '000-111-2222' }))
    }
    const updateContact = () => {
        console.log('update contact here.')
    }
    const removeContact = () => {
        console.log('remove contact here.')
    }

    return (
        <div align="center">
            <h3>Contacts</h3>
            <div>
                {content}
            </div>
            <div>
            </div><br />
            <div>
                <button onClick={saveContact}>Add Contact</button>
            </div><br />
            <div>
                <button onClick={updateContact}>Update Contact</button>
            </div><br />
            <div>
                <button onClick={removeContact}>Remove Contact</button>
            </div><br />

        </div>
    )
}