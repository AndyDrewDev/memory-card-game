import { createSlice } from '@reduxjs/toolkit'
import { generateCards } from '../data/cardsData'

function findByIndex(action) {
  return (item) => item.index === action.payload.index
}

const generatedCards = generateCards('sm')

const initialState = {
  cards: generatedCards,
  matchedCards: [],
}
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setGameSize: (state, action) => {
      state.cards = generateCards(action.payload)
      state.matchedCards = []
    },
    toggleCard: (state, action) => {
      const idx = state.cards.findIndex(findByIndex(action))
      state.cards[idx].isOpen = !state.cards[idx].isOpen
    },
    addCardsToMatched: (state, action) => {
      state.matchedCards = [...state.matchedCards, ...action.payload]
    },
    closeCards: (state, action) => {
      const updatedCards = state.cards.map((card) => {
        if (action.payload.includes(card.index)) {
          return { ...card, isOpen: false }
        }
        return card
      })
      state.cards = updatedCards
    },
  },
})

export const { setGameSize, toggleCard, addCardsToMatched, closeCards } =
  cardsSlice.actions

export default cardsSlice.reducer
