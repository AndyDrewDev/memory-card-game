import { configureStore } from '@reduxjs/toolkit'
import cardsSliceReducer from './cardsSlice'

export const store = configureStore({
  reducer: {
    cards: cardsSliceReducer,
  },
})
