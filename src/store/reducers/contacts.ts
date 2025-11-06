import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

import * as enums from '../../utils/enums/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'Bianca',
      email: 'bia@gmail.com',
      phone: '00 99999-9999',
      category: enums.Category.FAMILY,
      favorite: true,
      id: 1
    },
    {
      name: 'José Gomes',
      email: 'gomesj@gmail.com',
      phone: '00 99999-7777',
      category: enums.Category.BUSINESS,
      favorite: false,
      id: 2
    },
    {
      name: 'Maria da Silva',
      email: 'marias@gmail.com',
      phone: '00 99999-8888',
      category: enums.Category.FRIENDS,
      favorite: false,
      id: 3
    },
    {
      name: 'Paulo Reis',
      email: 'pauloreis@gmail.com',
      phone: '00 99999-6666',
      category: enums.Category.FRIENDS,
      favorite: true,
      id: 4
    }
  ]
}

function sortContactsAlphabetically(contacts: Contact[]) {
  return contacts
    .slice()
    .sort((a, b) =>
      a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })
    )
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = sortContactsAlphabetically([
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ])
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
        state.itens = sortContactsAlphabetically(state.itens)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; favorites: boolean }>
    ) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex].favorite = action.payload.favorites
      }
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const nameAdded = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      const emailAdded = state.itens.find(
        (contact) =>
          contact.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      const phoneAdded = state.itens.find(
        (contact) => contact.phone === action.payload.phone
      )

      if (nameAdded) {
        alert('Um contato com este nome já foi adicionado.')
      } else if (emailAdded) {
        alert('Um contato com este email já foi adicionado.')
      } else if (phoneAdded) {
        alert('Um contato com esse número já foi adicionado.')
      } else {
        // O Math é um objeto nativo do JS e o .max vai pegar o maior valor do mapeamento dos itens
        const maxId = state.itens.length
          ? Math.max(...state.itens.map((c) => c.id))
          : 0

        const newContact = {
          ...action.payload,
          id: maxId + 1
        }
        state.itens.push(newContact)
        state.itens = sortContactsAlphabetically(state.itens)
      }
    },
    editStatus: (
      state,
      action: PayloadAction<{
        id: number
        name: string
        email: string
        category: enums.Category
      }>
    ) => {
      // const currentStatus = state.itens.find(
      //   (contact) => contact.category === action.payload.category
      // )
      const contactIndex = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = {
          ...state.itens[contactIndex],
          ...action.payload
        }
        state.itens = sortContactsAlphabetically(state.itens)
      }
    }
  }
})

export const { remove, edit, changeStatus, add, editStatus } =
  contactsSlice.actions
export default contactsSlice.reducer
