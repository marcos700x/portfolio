import './App.scss';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Context from './context/Context';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div className="App">
        <Context>
      <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<Contact/>} path="contact"/>
    <Route element={<Portfolio/>} path="/portfolio"></Route>
  </Routes>
        </Context>
    </div>
  );
}

export default App;
