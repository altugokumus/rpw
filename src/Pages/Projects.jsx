import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from "../Components/Footer/Footer";
import Dropdown from '../Components/Dropdown/Dropdown';


function Projects() {
  return (
    <>
    <Sidebar />
    <Dropdown />
    <div className='projects'>
    <a id='musicplayer' href="/musicplayer"><div className="project">
        <h1>Music Player</h1>
        <p>Go to preject</p>
      </div></a>
    </div>
    <Footer />
  </>
  )
}

export default Projects;