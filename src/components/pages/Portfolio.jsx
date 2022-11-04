import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/Context'
import { DataPortfolio } from '../../data/DataPortfolio'
import Loader from '../Loader';
import GoBackButton from '../GoBackButton';
import { BsGithub, BsGlobe } from 'react-icons/bs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import ScrollbarPortfolio from '../ScrollbarPortfolio';

const Portfolio = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()



  return (
    <div className='portfolio-page'>
      <Loader />
      <GoBackButton />
      <ScrollbarPortfolio/>
      {/* <main> */}
        {
          DataPortfolio.map((obj, index) => (
            <section id={obj.title} className='d-flex justify-content-center align-items-center pe-5 me-5' key={index}>
              <div className="container container-projects  p-3 d-flex flex-column gap-3">
                <div className='row'>
                  <div className="col col-4 col-md-2 d-flex justify-content-start align-items-center mb-3 mb-md-0">
                    <img src={obj.logo} className='w-100' alt="" />
                  </div>
                  <div className="col col-12 mt-3 d-flex justify-content-start align-items-center">
                    <h1 className='text-light fw-bold display-1 '>
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
      {/* </main> */}
    </div>
  )
}

export default Portfolio