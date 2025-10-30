import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

import * as enums from '../../utils/enums/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'Bianca Fucuda Rehder',
      email: 'bianca.fucuda@gmail.com',
      phone: '64 99999-9999',
      category: enums.Category.FAMILY,
      favorite: true,
      id: 1
    },
    {
      name: 'Maria da Silva',
      email: 'marias@gmail.com',
      phone: '64 99999-8888',
      category: enums.Category.FRIENDS,
      favorite: false,
      id: 2
    },
    {
      name: 'José Gomes',
      email: 'gomesj@gmail.com',
      phone: '64 99999-7777',
      category: enums.Category.BUSINESS,
      favorite: false,
      id: 3
    },
    {
      name: 'Paulo Reis',
      email: 'pauloreis@gmail.com',
      phone: '64 99999-6666',
      category: enums.Category.FRIENDS,
      favorite: true,
      id: 4
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
