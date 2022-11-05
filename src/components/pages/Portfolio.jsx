import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/Context'
import { DataPortfolio } from '../../data/DataPortfolio'
import Loader from '../Loader';
import { BsGithub, BsGlobe } from 'react-icons/bs'
import '@splidejs/react-splide/css/sea-green';
import ScrollReveal from 'scrollreveal'
import ScrollbarPortfolio from '../ScrollbarPortfolio';
import { useEffect } from 'react';
import Menu from '../Menu';

const Portfolio = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()
  
  useEffect(() => {
    var arrayLogos = document.querySelectorAll('.project-logo')
    var arrayTitles = document.querySelectorAll('.project-title')
    ScrollReveal().reveal(arrayLogos , {
      origin: 'left',
      reset: true,
      distance: '100%',
      duration: 1000,
    })
    ScrollReveal().reveal(arrayTitles, {
      origin: 'left',
      reset: true,
      distance: '100%',
      duration: 1000,
    })
  },[])

  return (
    <>
      <Loader />
      <ScrollbarPortfolio/>
      <Menu/>
        {
          DataPortfolio.map((obj, index) => (
            <section id={obj.title} className='d-flex justify-content-center align-items-center pe-5 me-5' key={index}>
              <div className="container container-projects  p-3 d-flex flex-column gap-3">
                <div className='row'>
                  <div className="col col-4 col-md-2 d-flex justify-content-start align-items-center">
                    <img src={obj.logo} className='w-100 project-logo' alt="" />
                  </div>
                  <div className="col col-12 mt-3 d-flex justify-content-start align-items-center">
                    <h1 className='text-light fw-bold display-1 project-title '>
                      {
                        obj.title === "Google Keep Clone" ? generateLetters(obj.title, true, 11) :
                          obj.title === "Password Generator" ? generateLetters(obj.title, true, 8) :
                          obj.title === "Stadistics App" ? generateLetters(obj.title, true, 10) :
                          obj.title === "Unit Converter" ? generateLetters(obj.title, true, 4) :
                            generateLetters(obj.title, false)
                      }
                    </h1>
                  </div>
                </div>
                <p className="lead text-light" style={{ fontSize: '1.2em' }}>
                  {obj.description}
                </p>
                <div className="row">
                  {obj.links.web && <div className="col col-12 col-md-auto">
                    <div className="d-flex flex-row align-items-center">
                      <BsGlobe size={'2rem'} color="#fff" />
                      <a target={'_blank'} rel='noreferrer' className='text-decoration-none fs-4 btn btn-link text-light' href={obj.links.web}>View website</a>
                    </div>
                  </div>}

               {  obj.links.github && <div className="col col-12 col-md-auto">
                    <div className="d-flex flex-row align-items-center ">
                      <BsGithub size={'2rem'} color="#fff" />
                      <a target={'_blank'} rel='noreferrer' className='text-decoration-none fs-4 btn btn-link text-light' href={obj.links.github}>Github</a>
                    </div>
                  </div>}

                </div>
              </div>
            </section>

          ))
        }
    </>
  )
}

export default Portfolio