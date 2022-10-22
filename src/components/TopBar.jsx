import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { IoMailSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'

const TopBar = ({ isHome }) => {
  return (
    <nav className={`p-4 d-flex ${isHome ? 'justify-content-end' : 'justify-content-between'} align-items-center w-100 position-fixed top-0`}>
      {!isHome && <Link to={'/'}><MdArrowBackIosNew size={'2.5rem'} color="#fff"/></Link>}
      
        <div className="d-flex gap-4">
        <a href="https://github.com/marcos700x" target='_blank'><BsGithub size={'2.5rem'} color="#fff" /></a>
        <Link to={'/contact'}><IoMailSharp size={'2.5rem'} color="#fff"/></Link>
        </div>
    </nav>
  )
}


export default TopBar