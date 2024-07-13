import { useRef } from 'react'
import { Modal } from '../components/Modal'

export const useModal = ({ children, onModalClose, onModalOpen }) => {
  const ref = useRef(null)

  const closeModal = () => {
    onModalClose && onModalClose()
    ref.current.close()
  }

  const openModal = () => {
    onModalOpen && onModalOpen()
    ref.current.showModal()
  }

  const modal = <Modal ref={ref}>{children}</Modal>

  return {
    closeModal,
    openModal,
    modal,
  }
}
