import React, { useState } from 'react';

import './Navigation.css';

export default () => {
  const [menu, setMenu] = useState('');

  const scrollTo = (target = 'top') => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (window) {
      window.scrollTo(0, 0);
    }
  };

  const toggleMenu = () => setMenu(menu ? '' : 'close');

  return (
    <header>
      <nav className="center">
        <ul id="left-nav">
          <li>DEVDOCK</li>
        </ul>

        <ul
          className="center"
          id="right-nav"
          style={{
            height: menu ? 36 * 4 + 'px' : '0'
          }}
        >
          <li onClick={scrollTo.bind(this, 'solutions')}>Solutions</li>
          <li onClick={scrollTo.bind(this, 'about-us')}>About Us</li>
          <li onClick={scrollTo.bind(this, 'schedule-call')}>
            Schedule a Call
          </li>
          <li onClick={scrollTo.bind(this, 'email-us')}>Email Us</li>
        </ul>

        <div id="drop-down-menu" className={menu} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div id="welcome-text">
        <h1>DevDock</h1>
        <h2>Convert more website visitors into paying customers.</h2>
        <button onClick={scrollTo.bind(this, 'schedule-call')}>
          Contact Us
        </button>
      </div>
    </header>
  );
};
