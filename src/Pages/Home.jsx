import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';
import Dropdown from '../Components/Dropdown/Dropdown';


function Home() {
  return (
    <>
      <Sidebar />
      <Dropdown />
        <div className='home'>
          <h1>Hello!</h1>
          <p>I'm Altug, a developer based in Izmir.</p>
        </div>
      <Footer />
    </>
  )
}

export default Home;