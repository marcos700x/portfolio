import React, { useContext } from 'react'
import Loader from '../Loader';
import WorkCard from '../WorkCard'
import { HashLink as Link } from 'react-router-hash-link';
import { AppContext } from '../../context/Context';
import CustomButton from '../CustomButton';
import Menu from '../Menu';


const Home = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()
    

  return (
    <>
        <Loader />
        <Menu/>
    <div className='vh-100 p-4 d-flex flex-column justify-content-center align-items-center'>
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className='text-light fw-bold display-1 mb-4'>{generateLetters("I'm Marcos, web developer", true, 11)}</h1>
            <p className="lead text-light  mb-4" style={{fontSize: '1.2em'}}>
              I'm a front-end developer from Mexico, I work with different technologies like React, Sass, Bootstrap, Git, and Styled-components.<br/>
              I like to be constantly updated in the tech world, learn new skills and acquire knowledge everyday.<br/>
              {/* And I also have some experience with PHP, MySQL, Firebase, Dart, Flutter, Figma and Firebase. */}
            </p>
            <div className="row gap-3">
              <div className="col col-6 col-12">
            <Link to={'/contact'}>
            <CustomButton  text={'Contact me'}/>
            </Link>
              </div>
              <div className="col col-6 col-12 d-lg-none">
            <Link to={'/portfolio'}>
            <CustomButton   secondary text={'My Work'}/>
            </Link>
              </div>
              </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center align-items-center mt-4 mt-md-0 d-none d-lg-flex">
            <WorkCard/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home