import Card from './Card'
import RadioInput from './RadioInput'
import { useDispatch, useSelector } from 'react-redux'
import { setGameSize, toggleCard } from '../store/cardsSlice'
import { compareCards } from '../data/cardsData'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'
// import FinishModal from './FinishModal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useCallback } from 'react'

const AlertWindow = withReactContent(Swal)

const alertOptions = {
  imageUrl: '/src/assets/confetti.png',
  imageHeight: 100,
  title: 'Congratulations!',
  text: 'You win!',
  confirmButtonText: 'Close',
}

const Cards = () => {
  const dispatch = useDispatch()
  const generatedCards = useSelector((state) => state.cards.cards)
  const matchedCards = useSelector((state) => state.cards.matchedCards)

  const setSize = useCallback(
    (value) => {
      dispatch(setGameSize(value))
    },
    [dispatch]
  )

  const cards = generatedCards.map(({ type, isOpen, index }) => {
    const key = `${index}_${type}`
    const handleCardClick = () => {
      if (isOpen || matchedCards.includes(index)) {
        return
      }

      dispatch(toggleCard({ type, isOpen, index }))

      dispatch(compareCards())
    }

    return (
      <Card
        key={key}
        type={type}
        isOpen={isOpen}
        toggleCard={handleCardClick}
      />
    )
  })

  useEffect(() => {
    if (matchedCards.length === generatedCards.length) {
      AlertWindow.fire(alertOptions).then(() => {
        setSize('sm')
      })
    }
  }, [matchedCards.length, generatedCards.length, setSize])

  return (
    <div className=''>
      <h1>Welcome to memory card game!</h1>
      <RadioInput onChange={setSize} />

      <div className='cards'>{cards}</div>
      {matchedCards.length === generatedCards.length ? (
        <Fireworks autorun={{ speed: 3 }} />
      ) : null}
      {/* {matchedCards.length === generatedCards.length ? <FinishModal /> : null} */}
    </div>
  )
}

export default Cards
