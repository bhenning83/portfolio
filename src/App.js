import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import {Element} from 'react-scroll'

function App() {
  return (
    <div className='container-fluid m-0'>
      <div>
        <Element name='home' id='home'>
          <Home />
        </Element>
        <Element name='work' id='work'>
          <Work />
        </Element>
        <Element name='about' id='about'>
          <About />
        </Element> 
        <Element name='contact' id='contact'>
          <Contact />
        </Element>
        <Menu />
      </div>
    </div>
  );
}

export default App;
