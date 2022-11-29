import React from 'react'
import { useState } from 'react'
import { Animated } from 'react-animated-css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Menu = () => {

const [showMenu, setShowMenu] = useState(false)
const location = useLocation()

    return (
        <>
            <StyledMenuButton htmlFor="check" className="bar" onChange={() => setShowMenu(!showMenu)}>
                <input id="check" type="checkbox" />
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </StyledMenuButton>
            <Animated className="wrapperMenu" animationIn={null}  isVisible={showMenu}>
<Animated animationIn='slideInRight' animationInDuration={500} animationOutDuration={500} animationInDelay={0} animationOutDelay={0} animationOut='slideOutRight' isVisible={showMenu} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 98,}}>
            <StyledMenu>
              <div className={`containerLink ${location.pathname !== '/portfolio' ? 'opacity-50' : 'containerLinkActive'}`}>
                <Link to={'/portfolio'}>Home</Link>
             <span className="activeDecoration"></span> 
              </div>
              <div className={`containerLink ${location.pathname !== '/portfolio/contact' ? 'opacity-50' : 'containerLinkActive'}`}>
                <Link to={'/portfolio/contact'}>Contact</Link>
                <span className="activeDecoration"></span> 
              </div>
              <div className={`containerLink ${location.pathname !== '/portfolio/projects' ? 'opacity-50' : 'containerLinkActive'}`}>
                <Link to={'/portfolio/projects'}>Portfolio</Link>
                <span className="activeDecoration"></span> 
              </div>
            </StyledMenu>
</Animated>
            </Animated>
        </>
    )
}

const StyledMenu = styled.div`
position: absolute;
top: 0;
right: 0;
z-index: 2;
backdrop-filter: blur(8px);
height: 100vh;
width: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #02A28A;
box-shadow: -20px 0 20px #00000088;

@media screen and (max-width: 768px) {
    width: 80%;
background-color: #02A28A;

}
.containerLink{
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 40px;
transition: all .3s ease;
@media (hover: hover){
  &:hover{
    opacity: 0.8!important;
  }
}

  a{
    text-decoration: none;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    width: 100%;
    position: relative;
    transition: all .5s ease;
    letter-spacing: 0.3em;
    color: #fff;
  }
  .activeDecoration{
    width: 100%;
    height: 5px;
    background-image: linear-gradient(90deg, #02A28A, #08FDD9);
  }
    }
.containerLinkActive{
  &:hover{
    opacity: 1!important;
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
  background-color: #fff;
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
  background-color: #fff;
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