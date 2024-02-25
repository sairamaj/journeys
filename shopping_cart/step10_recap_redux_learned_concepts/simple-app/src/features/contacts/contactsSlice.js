import { createSlice } from '@reduxjs/toolkit'

// Initial state , hard coded here (in real application, comes from backend)
const initialState = [
    {
        name: 'sai',
        email: 's@abc.com',
        phone: '123-456-7890'
    },
    {
        name: 'ram',
        email: 'r@abc.com',
        phone: '345-678-1234'
    },
]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
})

export default contactsSlice.reducer