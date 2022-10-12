import React from 'react'
import { Backdrop, CloseMark, ModalContent } from './TwModal.syled'

function TwModal(props) {
  const { children, open, doClose } = props;
  return (
    <Backdrop onClick={doClose} open={open}>
      <ModalContent onClick={e=>e.stopPropagation()} open={open}>
        <CloseMark onClick={doClose}>
          &times;
        </CloseMark>
        <div  className='p-8'>
          {children}
        </div>
      </ModalContent>
    </Backdrop>
  )
}

export default TwModal