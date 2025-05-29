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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload
      const indexToRemove = state.items.findIndex(
        (item) => item.id === idToRemove
      )

      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1)
      }
    }
  }
})

export const { add, remove, open, close } = cartSice.actions
export default cartSice.reducer
