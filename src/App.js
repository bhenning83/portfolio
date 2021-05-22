import './App.css';
import Menu from './components/Menu';
import Hamburger from './components/Hamburger';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className='container-fluid m-0'>
      <div>
        <Element name='home'>
          <Home />
        </Element>
        <Element name='work'>
          <Work />
        </Element>
        <Element name='about'>
          <About />
        </Element> 
        <Element name='contact'>
          <Contact />
        </Element>
        <Hamburger /> 
        <Menu />
      </div>
    </div>
  );
}

export default App;
