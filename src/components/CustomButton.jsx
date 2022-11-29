import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ text, disabled = false, className, isLink, href, secondary }) => {

  if( !isLink )return (
    <StyledButton secondary={secondary} className={className} disabled={disabled}>
        <span>{ text }</span>
    <div className="top"></div>
    <div className="left"></div>
    <div className="bottom"></div>
    <div className="right"></div>
    </StyledButton> 
  )
  if(isLink) return(
    <StyledLink secondary={secondary} href={href} className={className} disabled={disabled}>
    { text }
<div className="top"></div>
<div className="left"></div>
<div className="bottom"></div>
<div className="right"></div>
</StyledLink>
  )
}

const StyledButton = styled.button`
width: 250px;
padding: 20px 60px;
background-color: #000;
background-color: ${props => props.secondary ? '#08FDD8' : '#000'};
border: none;
font-size: 18px;
pointer-events: ${props => props.disabled ? 'none' : 'all'};
position: relative;
overflow: hidden;
/* transition: 500ms; */
@media screen and (max-width: 768px){
  width: 100%;
}

span {
  color: ${props => props.secondary ? '#000' : 'gray'};
  position: relative;
  transition: 500ms;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

&::before {
  display: ${props => props.secondary ? 'none!important' : 'block'};
  content: '';
  position: absolute;
  width: 0%;
  height: 0%;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  transition: 500ms;
  background-color: #08FDD8;
  box-shadow: 0 0 10px #08FDD8,
   0 0 30px #08FDD8, 
   0 0 50px #08FDD8;
}

div {
    display: ${props => props.disabled ? 'none!important' : 'block'};
  transition: 500ms;
  position: absolute;
  background-color: #08FDD8;
  box-shadow: 0 0 15px #08FDD8, 0 0 30px #08FDD8, 0 0 50px #08FDD8;
}

.top {
  width: 15px;
  height: 2px;
  top: 0;
  left: 0;
}

.bottom {
  width: 15px;
  height: 2px;
  bottom: 0;
  right: 0;
}

.left {
  width: 2px;
  height: 15px;
  top: 0;
  left: 0;
}

.right {
  width: 2px;
  height: 15px;
  bottom: 0;
  right: 0;
}
@media (hover: none){
  background-color: ${props  => props.secondary ? "#000" : '#08FDD8'};
  div, &::before{
    display: ${props => props.disabled ? 'none' : 'block'};
  }
  

 span {
  color: ${props => props.secondary ? '#08FDD8' : '#000'};
}
  &:before {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

 .top, 
 .bottom {
  width: 100%;
}

 .left,
 .right {
  height: 100%;
}
}

@media (hover: hover){
  &:hover {
  color: #000;
}

&:hover span {
  color: #000;
}
  &:hover:before {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

&:hover .top, 
&:hover .bottom {
  width: 100%;
}

&:hover .left,
&:hover .right {
  height: 100%;
}
}

`
const StyledLink = styled.a`
padding: 20px 60px;
background-color: #08FDD8;
text-decoration: none;
width: fit-content;
border: none;
color: #000!Important;
font-size: 18px;
pointer-events: ${props => props.disabled ? 'none' : 'all'};
position: relative;
overflow: hidden;
transition: 500ms;

span {
  color: gray;
  position: relative;
  transition: 500ms;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

&::before {
  content: '';
  position: absolute;
  width: 0%;
  height: 0%;
  left: 50%;
  right: 50%;
  top: 50%;
  z-index: -1;
  bottom: 50%;
  transition: 500ms;
  background-color: #08FDD8;
  box-shadow: 0 0 10px #08FDD8,
   0 0 30px #08FDD8, 
   0 0 50px #08FDD8;
}

div {
    display: ${props => props.disabled ? 'none' : 'block'};
  transition: 500ms;
  position: absolute;
  background-color: #08FDD8;
  box-shadow: 0 0 15px #08FDD8, 0 0 30px #08FDD8, 0 0 50px #08FDD8;
}

.top {
  width: 15px;
  height: 2px;
  top: 0;
  left: 0;
}

.bottom {
  width: 15px;
  height: 2px;
  bottom: 0;
  right: 0;
}

.left {
  width: 2px;
  height: 15px;
  top: 0;
  left: 0;
}

.right {
  width: 2px;
  height: 15px;
  bottom: 0;
  right: 0;
}
@media (hover: none){
  color: #000;
  div, &::before{
    display: ${props => props.disabled ? 'none' : 'block'};
  }
  

 span {
  color: #000;
}
  &:before {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

 .top, 
 .bottom {
  width: 100%;
}

 .left,
 .right {
  height: 100%;
}
}

@media (hover: hover){
  &:hover {
  color: #000;
}

&:hover span {
  color: #000;
}
  &:hover:before {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

&:hover .top, 
&:hover .bottom {
  width: 100%;
}

&:hover .left,
&:hover .right {
  height: 100%;
}
}
`

export default CustomButton