import { configureStore } from '@reduxjs/toolkit'

import contatsReducer from './features/contacts/contactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contatsReducer,
  },
})

