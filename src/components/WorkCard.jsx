import React from 'react'
import { DataPortfolio } from '../data/DataPortfolio'
import { HashLink as Link } from 'react-router-hash-link'

const WorkCard = () => {
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
        DataPortfolio.map((item, index) => <Link className='workLink'  key={index} to={`portfolio#${item.title}`}>{item.title}</Link>  )
      }
            {/* <a className='workLink' href="http://www.cbtis128.edu.mx/" target='_blank'>CBTIS 128</a>
            <a className='workLink' href="https://marcos700x.github.io/App-Estadistica/" target='_blank'>Stadistics App</a>
            <a className='workLink' href="https://marcos700x.github.io/app-notas-reactjs/" target='_blank'>Google Keep Clone</a>
            <a className='workLink' href="https://marcos700x.github.io/Password-Generator/" target='_blank'>Password Generator</a>
            <a className='workLink' href="https://marcos700x.github.io/ConversorUnidades-React/" target='_blank'>Unit Converter</a> */}
    </div>
    
</div>
  )
}

export default WorkCard