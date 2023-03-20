import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import MusicPlayer from './Components/Musicplayer/MusicPlayer';




function App() {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/musicplayer" element={<MusicPlayer />}/>
      </Routes>
    </>
  );
}

export default App;
