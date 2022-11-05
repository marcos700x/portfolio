import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { DataPortfolio } from '../data/DataPortfolio'

const ScrollbarPortfolio = () => {

    const scrollbar = useRef(null)
    const mainColor = '#08FDD8';

    useEffect(() => {
        let scrollPercent = 0;
        window.onscroll = () => {
            const height = document.documentElement.scrollHeight;
            const element = document.documentElement;
            scrollPercent = Math.round(element.scrollTop / (height - element.clientHeight) * 100)
            scrollbar.current.style.height = `${scrollPercent}%`;
            var buttons = document.querySelectorAll('.project-button')
            if (scrollPercent >= 0) buttons[0].style.backgroundColor = mainColor; else buttons[0].style.backgroundColor = '#fff'
            if (scrollPercent >= 25) buttons[1].style.backgroundColor = mainColor; else buttons[1].style.backgroundColor = '#fff'
            if (scrollPercent >= 50) buttons[2].style.backgroundColor = mainColor; else buttons[2].style.backgroundColor = '#fff'
            if (scrollPercent >= 75) buttons[3].style.backgroundColor = mainColor; else buttons[3].style.backgroundColor = '#fff'
            if (scrollPercent >= 100) buttons[4].style.backgroundColor = mainColor; else buttons[4].style.backgroundColor = '#fff'
        }

    }, [])


    return (
        <StyledScrollbarPortfolio>
            <span ref={scrollbar} className={'scrollbar'}></span>
            {

                DataPortfolio.map((item, index) =>
                    <button alt={item.title} key={index} className='rounded-circle project-button'><a href={`#${item.title}`} alt={item.title}><img src={item.logo} alt="" /></a></button>
                )
            }
        </StyledScrollbarPortfolio>
    )
}

const StyledScrollbarPortfolio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #fff;
  width: 10px;
  height: 50%;
  position: fixed;
  inset: 0 36px 0 auto;
  margin: auto;


  .scrollbar{
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: #08FDD8;
    transition: background .3s ease-in-out;
    
  }


  button{
    width: 50px;
    aspect-ratio: 1;
    appearance: none;
    outline: none;
    border: none;
    background-color: #fff;
    transition: background .3s ease-in-out;
    position: relative;

    @media (hover: hover){

        &:hover{
            &::before, &::after{
                display: block;
            }
        }

        &::before{
            content: attr(alt);
            position: absolute;
            width: 140px;
            left: -150px;
            top: 0;
            bottom: 0;
            margin: auto;
            height: fit-content;
            padding: 8px;
            color: #000;
            border-radius: 5px;
            background-color: inherit;
            display: none;
            font-weight: 600;
        }
        &::after{
            width: 13px;
            aspect-ratio: 1;
            background-color: inherit;
            content: '';
            position: absolute;
            inset: 0 auto 0 -20px;
            margin: auto;
            transform: rotate(45deg);
            display: none;
        }

    }
    @media (hover: none){
        &::before, &::after{
            display: none;
        }
    }

    img{
        width: 100%;
        filter: drop-shadow(3px 3px 2px grey)
        
    }
    
  }

`

export default ScrollbarPortfolio