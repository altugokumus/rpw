import React, {useState} from 'react'

function Dropdown() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleMenuOne = () => {
        // do something
        setOpen(false);
      };
    
      const handleMenuTwo = () => {
        // do something
        setOpen(false);
      };

    return (
      <div className='dropdown'>
        <button onClick={handleOpen}>=</button>
        {open ? (
        <ul className="menu">
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/about">About Me</a>
          </li>
          <li className="menu-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="menu-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      ) : null}
       
      </div>
    );
  };
  

export default Dropdown;