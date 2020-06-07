import React from 'react'
import './styles/input.css'

const Input = (props) => {
  return (
    <div className={'input-container'}>
      <div className={'header-div'}>
        <h4>Pattern:</h4>
      </div>

      <div className={'input-form-div'}>
        <input
          type='text'
          placeholder={'Enter regex'}
          value={props.pattern}
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default Input
