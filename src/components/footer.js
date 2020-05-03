import React, { Component } from 'react'


class Footer extends Component {
  render()  {
    return (
      <React.Fragment>
        <div id='footer-contain'>
          <ul id='footer-list'>
            <li className='footer-list-item'>Contact us</li>
            <li className='footer-list-item'>Facebook</li>
            <li className='footer-list-item'>Instagram</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}



export default Footer;
