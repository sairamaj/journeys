import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

// Initial state , hard coded here (in real application, comes from backend)
const initialState = [
    {
        id: 1,
        name: 'sai',
        email: 's@abc.com',
        phone: '123-456-7890'
    },
    {
        id: 2,
        name: 'ram',
        email: 'r@abc.com',
        phone: '345-678-1234'
    },
]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded: {
            reducer(state, action) {
                // The code looks like doing mutating the object
                // but in reality the Redux framework (which uses immer library) and takes care
                // of creating new object.
                // This feature available only in reducers.
                state.push(action.payload)
            },

            prepare(name,email,phone){
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        email,
                        phone
                    }
                }
            }
        }
    }
})

export const { contactAdded } = contactsSlice.actions;
export default contactsSlice.reducer