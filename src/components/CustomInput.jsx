import React from 'react'

const CustomInput = ({ type = 'text', name=' ', placeholder = 'Jane Doe', autocomplete = 'off', spellcheck = false, isTextArea, requiered = true }) => {
  return (
    <div className="customInput">
    <div className="insideContainer">
        {
        isTextArea ?
         <textarea placeholder={placeholder} spellCheck={spellcheck} name={name} required={requiered}/> 
         :
        <input type={type} name={name} placeholder={placeholder} autoComplete = {autocomplete} spellCheck={spellcheck} required={requiered} /> }
    
    </div>
  </div>
  )
}

export default CustomInput