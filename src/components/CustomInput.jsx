import React from 'react'

const CustomInput = ({
  
  type = 'text',
  name = ' ',
  placeholder = 'Jane Doe',
  autocomplete = 'off',
  spellcheck = false,
  isTextArea, requiered = true,
  handleInput,
  value = '',
  className = '',
}) => {

  return (
    <div className={`customInput ${className}`}>
      {
        isTextArea ?
          <textarea   className='input fs-5' value={value} placeholder={placeholder} spellCheck={spellcheck} name={name} required={requiered} onChange={handleInput} />
          :
          <input   className='input fs-5' value={value} type={type} name={name} placeholder={placeholder} autoComplete={autocomplete} spellCheck={spellcheck} required={requiered} onChange={handleInput} />}

    </div>
  )
}

export default CustomInput