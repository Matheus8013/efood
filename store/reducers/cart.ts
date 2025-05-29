import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DishItem } from '../../components/DishCard'

type CartState = {
  items: DishItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DishItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSice.actions
export default cartSice.reducer
