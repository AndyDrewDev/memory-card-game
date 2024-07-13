import { forwardRef } from 'react'

export const Modal = forwardRef(({ children }, ref) => {
  return (
    <dialog ref={ref} style={{ backgroundColor: '#5bc1e1' }}>
      <div>{children}</div>
    </dialog>
  )
})

Modal.displayName = 'Modal'
