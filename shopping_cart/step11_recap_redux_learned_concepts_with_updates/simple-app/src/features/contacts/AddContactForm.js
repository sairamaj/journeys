import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactAdded } from './contactsSlice'

export const AddContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPhoneChanged = e => setPhone(e.target.value)

    const dispatch = useDispatch()
    const canSave = Boolean(name) && Boolean(email) && Boolean(phone)

    const onSaveContactClicked = () => {
        if (name && email && phone) {
            dispatch(contactAdded(
                name, email, phone
            ))
            setName('')
            setEmail('')
            setPhone('')
        }
    }

    return (
        <div>
            <h2>Add a New Contact</h2>
            {<form>
                <label>Name:</label>
                <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={name}
                    onChange={onNameChanged}
                />
                <label>Email:</label>
                <input
                    type="text"
                    id="contactEmail"
                    name="contactEmail"
                    value={email}
                    onChange={onEmailChanged}
                />

                <label>Phone:</label>
                <input
                    type="text"
                    id="contactPhone"
                    name="contactPhone"
                    value={phone}
                    onChange={onPhoneChanged}
                />
                <button type="button" onClick={onSaveContactClicked} disabled={!canSave}>Save Contact</button>
            </form>}
        </div>
    )
}