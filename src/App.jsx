import { useEffect } from 'react';
import './App.scss';
import Loader from './components/Loader';
import ParticlesBackground from './components/ParticlesJS/ParticlesBackground';
import TopBar from './components/TopBar';
import WorkCard from './components/WorkCard';

function App() {


  const generateLetters = () => {
    const message = "I'm Marcos, web developer"
    var aux = []
    var arrayMessage = Array.from(message)
    arrayMessage.forEach((element, index) => {
      if (element === ' ') {
        aux.push(<span key={index} style={{ cursor: 'default' }}>&nbsp;</span>)
      } else {
        aux.push(<span className='animate' style={{ cursor: 'default' }} key={index}>{element}</span>)
      }
    });
    aux.splice(11, 1, <br key={11} />)
    return aux
  }

  useEffect(() => {

    document.querySelectorAll('.animate').forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.classList.add('animation-rubberband')
      })
      item.addEventListener('animationend', () => {
        item.classList.remove('animation-rubberband')
      })
    })
    document.querySelectorAll('.workLink').forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('animated-workLink')
      })
      item.addEventListener('animationend', () => {
        item.classList.remove('animated-workLink')
      })
    })
  }, [])


  return (
    <div className="vh-100 d-flex flex-column justify-content-start justify-content-md-center align-items-center">
      <ParticlesBackground />
      <Loader />
      <TopBar isHome/>
      <div className="container p-4 p-md-0 mt-5 pt-5 mt-md-0 pt-md-0">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className='text-light fw-bold display-2 mb-4'>{generateLetters()}</h1>
            <p className="lead text-light text-justify" style={{fontSize: '1.2em'}}>
              I'm a front-end developer from Mexico, I work with different technologies like React-Js, SASS, Bootstrap, Git, and Styled-components<br/>
              I like to be constantly updated in the tech world and learning new skills and acquire knowledge everyday.<br/>
              {/* And I also have some experience with PHP, MySQL, Firebase, Dart, Flutter, Figma and Firebase. */}
            </p>
          </div>
          <div className="col-auto col-md-4 d-flex justify-content-start justify-content-md-center align-items-center ms-3 ms-md-0 mt-3 mt-md-0">
            <WorkCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
