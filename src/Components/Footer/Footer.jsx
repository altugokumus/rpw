import React from 'react'



function Footer() {
    const currentYear = new Date().getFullYear();


  return (
    <footer className='footer'>
        <div>Copyrights © {currentYear}</div>
        <div><a target={'_blank'} href="https://github.com/altugokumus"><img className='icon' width={23} src={require('../Image/github_icon.png')} alt="" /></a></div>
        <div><a target={'_blank'} href="https://www.linkedin.com/in/altu%C4%9F-okumu%C5%9F-a2304644/"><img className='icon' width={23} src={require('../Image/linkedin_icon.png')} alt="" /></a></div>
        <div><a target={'_blank'} href="https://twitter.com/altgokms"><img className='icon' width={23} src={require('../Image/twitter_icon.png')} alt="" /></a></div>
    </footer>
  )
}

export default Footer;