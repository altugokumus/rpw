import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <a href=""><img className='logo' width={150} src={require('../Image/logo.png')} alt="" /></a>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./about">About Me</a></li>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./contact">Contact</a></li>
        </ul> 
    </div>
  )
}

export default Sidebar;