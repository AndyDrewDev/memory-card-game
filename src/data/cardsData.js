import {
  closeCards,
  markCardsAsMatched as addCardsToMatched,
} from '../store/cardsSlice'

const cardsData = [
  { type: '🐵', isOpen: false },
  { type: '🐶', isOpen: false },
  { type: '🐺', isOpen: false },
  { type: '🐱', isOpen: false },
  { type: '🐯', isOpen: false },
  { type: '🐴', isOpen: false },
  { type: '🐮', isOpen: false },
  { type: '🐷', isOpen: false },
  { type: '🐗', isOpen: false },
  { type: '🐰', isOpen: false },
  { type: '🐨', isOpen: false },
  { type: '🐼', isOpen: false },
]

const getSize = { sm: 16, md: 20, lg: 24 }

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

export const generateCards = (size = 'sm') => {
  const range = getSize[size] / 2
  const cardsSlice = cardsData.slice(0, range)
  const cardsSet = [...cardsSlice, ...cardsSlice].map((item, index) => ({
    ...item,
    index,
  }))

  return shuffle(cardsSet)
}

export const compareCards = () => (dispatch, getState) => {
  const { cards, matchedCards } = getState().cards
  const openCards = cards.filter(
    (card) => card.isOpen && !matchedCards.includes(card.index)
  )

  if (openCards.length !== 2) {
    return
  }

  const [firstCard, secondCard] = openCards

  if (firstCard.type === secondCard.type) {
    dispatch(addCardsToMatched([firstCard.index, secondCard.index]))
  } else {
    setTimeout(
      () => dispatch(closeCards([firstCard.index, secondCard.index])),
      700
    )
  }
}

export default cardsData
