import { useSelector } from 'react-redux'

const RadioInput = ({ onChange }) => {
  const gameSize = useSelector((state) => state.cards.cards.length)

  const onOptionChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className='btn-container'>
      <p className='title-selector'>Select size of game table</p>

      <div className='dimension-selector'>
        <input
          type='radio'
          name='dimension'
          value='sm'
          id='small'
          checked={gameSize === 16}
          onChange={onOptionChange}
        />
        <label htmlFor='small'>4x4</label>

        <input
          type='radio'
          name='dimension'
          value='md'
          id='medium'
          checked={gameSize === 20}
          onChange={onOptionChange}
        />
        <label htmlFor='medium'>4x5</label>

        <input
          type='radio'
          name='dimension'
          value='lg'
          id='large'
          checked={gameSize === 24}
          onChange={onOptionChange}
        />
        <label htmlFor='large'>4x6</label>
      </div>
    </div>
  )
}

export default RadioInput
