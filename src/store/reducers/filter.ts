import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contact'

type FilterState = {
  term?: string
  category: 'family' | 'business' | 'friends' | 'all' | 'favorites'
  value?: enums.Category
}

const initialState: FilterState = {
  term: '',
  category: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category
      state.value = action.payload.value
    }
  }
})

export const { changeFilter, changeTerm } = filterSlice.actions
export default filterSlice.reducer
