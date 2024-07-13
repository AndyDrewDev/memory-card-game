import { useDispatch } from 'react-redux'
import { useModal } from '../hooks/useModal'
import { setGameSize } from '../store/cardsSlice'
import { useEffect } from 'react'

const FinishModal = () => {
  const dispatch = useDispatch()

  const { modal, openModal, closeModal } = useModal({
    children: (
      <div>
        <h1>Congratulations!</h1>
        <div>
          <p>🎉You've done it!🎉</p>
        </div>
        <div>
          <button onClick={() => closeModal()}>Close</button>
        </div>
      </div>
    ),
    onModalClose: () => {
      dispatch(setGameSize('sm'))
    },
  })

  useEffect(() => {
    openModal()
  }, [openModal])

  return <div>{modal}</div>
}

export default FinishModal
