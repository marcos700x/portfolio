import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaChevronLeft } from 'react-icons/fa'

const GoBackButton = () => {

  const navigate  = useNavigate()

  return (
    <StyledGoHomeButton className='shadow m-0' onClick={() => navigate(-1)}> 
        <FaChevronLeft/>
    </StyledGoHomeButton>
  )
}
const StyledGoHomeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    aspect-ratio: 1;
    border-radius: 50%;
    font-size: 1.2em;
    position: fixed;
    top: 20px;
    z-index: 10;
    right: 20px;
    border: none;
    outline: none;
    background-color: #fff;
    color: #000; 
    transition: opacity 0.4s ease-in-out ;
    
    @media (hover: none){
        opacity: 1;
    }
    @media (hover: hover){
        opacity: 0.5;
        &:hover{
        opacity: 1;
    }
    }

    

`

export default GoBackButton