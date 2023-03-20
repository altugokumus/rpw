import React from 'react'
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';
import Dropdown from '../Components/Dropdown/Dropdown';

function Contact() {
  return (
    <>
    <Sidebar />
    <Dropdown />
    <div className='contact'>
      <h1>Contact Me</h1>
      <p><strong>Phone:</strong> +90 553 409 83 30</p>
      <p><strong>E-Mail:</strong> altugokumus@gmail.com</p>

      <form action="post">
      <h1>Send Message</h1>
        <div>
          <input type="text" placeholder='Enter your firstname' required/>
        </div>
        <div>
          <input type="text" placeholder='Enter your lastname' required/>
        </div>
        <div>
          <input type="email" placeholder='Enter your email' required/>
        </div>
        <div>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default Contact;