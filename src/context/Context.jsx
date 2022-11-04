import React, { createContext, useEffect } from 'react'

export const AppContext = createContext()

const Context = ({ children }) => {

    const generateLetters = (message, wrap, indexWrap) => {
        var aux = []
        var arrayMessage = Array.from(message)
        arrayMessage.forEach((element, index) => {
          if (element === ' ') {
            aux.push(<span key={index} style={{ cursor: 'default' }}>&nbsp;</span>)
          } else {
            aux.push(
            <span className='animate' style={{ cursor: 'default' }} key={index}>{element}</span>
            )
          }
        });
        if(wrap){
          aux.splice(indexWrap, 1, <br key={indexWrap} />)
        }
        return aux
      }
      const AnimateLetters = () => useEffect(() => {
    
        document.querySelectorAll('.animate').forEach((item) => {
          item.addEventListener("mouseenter", () => {
            item.classList.add('animation-rubberband')
          })
          item.addEventListener('animationend', () => {
            item.classList.remove('animation-rubberband')
          })
        })
        document.querySelectorAll('.workLink').forEach((item) => {
          item.addEventListener('mouseenter', () => {
            item.classList.add('animated-workLink')
          })
          item.addEventListener('animationend', () => {
            item.classList.remove('animated-workLink')
          })
        })
      }, [])

  return (
    <AppContext.Provider value={{ generateLetters, AnimateLetters }}>
        { children }
    </AppContext.Provider>
  )
}

export default Context