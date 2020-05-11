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
            <li className='nav-list-item' onClick={() =>this.props.handleView('home')}>HOME</li>
            <li className='nav-list-item' onClick={() => this.props.handleView('itemSearch')}>ITEM SEARCH</li>
            <li className='nav-list-item' onClick={() => this.props.handleView('gallery')}>GALLERY</li>
          </ul>
        </div>
      </ React.Fragment>
    )
  }
}


export default Header;
