import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import * as enums from '../../utils/enums/Contact'

type FilterState = {
  term?: string
  category: 'family' | 'business' | 'friends' | 'all' | 'favorites'
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
    changeFilter: (
      state,
      action: PayloadAction<
        'family' | 'business' | 'friends' | 'all' | 'favorites'
      >
    ) => {
      state.category = action.payload
    }
  }
})

export const { changeFilter, changeTerm } = filterSlice.actions
export default filterSlice.reducer
