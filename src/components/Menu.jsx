import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Menu = () => {

const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <StyledMenuButton htmlFor="check" className="bar" onChange={() => setShowMenu(!showMenu)}>
                <input id="check" type="checkbox" />
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </StyledMenuButton>
<Animated animationIn='slideInRight' animationInDuration={500} animationOutDuration={500} animationInDelay={0} animationOutDelay={0} animationOut='slideOutRight' isVisible={showMenu} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 98,}}>
            <StyledMenu>
                <Link className='fs-4' to={'/'}>Home</Link>
                <Link className='fs-4' to={'/contact'}>Contact</Link>
                <Link className='fs-4' to={'/portfolio'}>Portfolio</Link>
            </StyledMenu>
</Animated>
        </>
    )
}

const StyledMenu = styled.div`
position: absolute;
top: 0;
right: 0;
z-index: 2;
background-color: #08fdd8;
backdrop-filter: blur(8px);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 768px) {
    width: 100%;
    background-color: transparent;
background-image: linear-gradient(90deg, #08fdd8 50%, #0a0a0a 50%) ;  
}


a{
    padding: 20px 50px;
    text-decoration: none;
    font-size: 600;
    text-align: center;
    width: 100%;
    position: relative;
    transition: all .5s ease;
            color: #000;
    @media (hover: hover){
        &:hover{
            color: #08fdd8;
            &::before{
            animation: menuLink .5s ease-in-out forwards;

            }
        }
        &::before{
            content: '';
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: left;
            background-color: #000;
            height: 100%;
            z-index: -1;
        }
    }
    @media screen and (max-width: 768px) {
        text-align: right;
        padding: 20px;
    color: #fff;
    &::before{
      display: none;
    }

    }
}

`

const StyledMenuButton = styled.label`
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 99;
    cursor: pointer;
    width: 35px;
    height: 35px;

  input{
    -webkit-appearance: none;
  display: none;
  visibility: hidden;

  &:checked ~ .top{
    transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
  background-color: #000;
  @media screen and (max-width: 768px){
    background-color: #fff;
  }
  }
  &:checked ~ .bottom{
    transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
  background-color: #000;
  @media screen and (max-width: 768px){
    background-color: #fff;
  }
  }
  &:checked ~ .middle{
    transform: translateX(-20px);
  opacity: 0;
  }

  }

  span{
    position: absolute;
  width: 100%;
  height: 5px;
  background: #f1faee;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
  }
  .top{
    top: 4px;
}
.middle{
    top: 15px;
}
 .bottom{
    bottom: 4px;
 }
`

export default Menu