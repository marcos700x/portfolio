import React from 'react'
import { DataPortfolio } from '../data/DataPortfolio'
import { HashLink as Link } from 'react-router-hash-link'
import { useEffect } from 'react';

const WorkCard = () => {

  const reAnimate = () => {
    const workCard = document.querySelector('.cardWork');
    workCard.classList.toggle('animateCardWork')
  } 
  useEffect(() => {
    setInterval(() => {
      reAnimate()
    }, 2000);
  }, [])

  return (
    <div className="cardWork" tabIndex={1}>
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>
    <h2 className='text-light mt-2 ms-2'>My work</h2>
    <div className="d-flex flex-column gap-3 align-items-start h-100 ms-2">
      {
        DataPortfolio.map((item, index) => <Link className='workLink'  key={index} to={`/portfolio/projects/#${item.title}`}>{item.title}</Link>  )
      }
    </div>
</div>
  )
}

export default WorkCard