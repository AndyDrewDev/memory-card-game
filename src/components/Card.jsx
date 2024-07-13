import ReactCardFlip from 'react-card-flip'

const Card = ({ type, isOpen, toggleCard }) => {
  return (
    <div className='card-wrapper'>
      <ReactCardFlip isFlipped={isOpen} flipDirection='horizontal'>
        <div className='card' onClick={toggleCard}></div>
        <div className='card' onClick={toggleCard}>
          <div className='card-content'>{type}</div>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default Card
