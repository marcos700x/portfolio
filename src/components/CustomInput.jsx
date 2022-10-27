import React from 'react'

const CustomInput = ({ type = 'text', name = ' ', placeholder = 'Jane Doe', autocomplete = 'off', spellcheck = false, isTextArea, requiered = true, handleInput }) => {
  return (
    <div className="customInput">
      <div className="insideContainer">
        {
          isTextArea ?
            <textarea className='input' placeholder={placeholder} spellCheck={spellcheck} name={name} required={requiered} onChange={handleInput}/>
            :
            <input className='input' type={type} name={name} placeholder={placeholder} autoComplete={autocomplete} spellCheck={spellcheck} required={requiered} onChange={handleInput} />}

      </div>
    </div>
  )
}

export default CustomInput