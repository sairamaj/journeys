import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client'
const initialState = {
    status: 'idle',
    contacts: [],
    error: null
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    console.log('api will be called here , to get contacts...')
    const response = await client.get('/api/contacts')
    return response.data
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    console.log(`addContact thunk: ${contact}`);
    return contact
});


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                console.log('in fetchContacts.pending')
                state.status = 'loading'
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                console.log('in fetchContacts.fulfilled')
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.contacts = action.payload
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                console.log('in fetchContacts.rejected')
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addContact.fulfilled, (state, action) => {
                console.log('in addContact fulfilled reducer')
                state.status = 'succeeded'
                state.contacts = state.contacts.concat(action.payload)
            })
            .addDefaultCase(msg => {
                // console.log(`default: state:${msg}`)
            })
    }
});

export default contactsSlice.reducer