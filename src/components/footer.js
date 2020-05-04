import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'


class Footer extends Component {
  render()  {
    return (
      <React.Fragment>
        <div id='footer-contain'>
            <SocialIcon url='https://www.facebook.com/HopNCru/?ref=br_rs' className='social-icon' />
            <SocialIcon url='https://www.instagram.com/hop_n_cru/?hl=en' className='social-icon'/>
        </div>
      </React.Fragment>
    )
  }
}



export default Footer;
