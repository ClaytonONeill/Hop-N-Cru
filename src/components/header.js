import React, { Component } from 'react'
import logo from '../assets/Hop-N-Cru-Logo.jpg'


class Header extends Component {
  render()  {
    return(
      <React.Fragment>
        <div className='header-main'>
          <div className='logo'>
            <img src={logo} alt='Hop-N-Cru Logo' id='logo-image'></img>
          </div>
        </div>
        <div id='header-nav'>
          <ul id='nav-items'>
            <li className='nav-list-item'>HOME</li>
            <li className='nav-list-item'>GALLERY</li>
            <li className='nav-list-item'>TESTIMONIALS</li>
            <li className='nav-list-item'>STORE INFO</li>
          </ul>
        </div>
      </ React.Fragment>
    )
  }
}


export default Header;
