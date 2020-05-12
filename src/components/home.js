import React, { Component } from 'react'
import map from '../assets/Hop-N-Cru-Map-Location.png'

class Home extends Component {
  render()  {
    return (
      <React.Fragment>
        <div className='home-contain'>
          <div className='location-div'>
            <h3>
              - 20940 Frederick Road, Suite G<br/>
               Germantown, MD 20876
            </h3>
            <h3>
               (240) 801-8550
            </h3>
          </div>
          <div className='home-images'>
            <img src='https://i.imgur.com/Uhi43m4.jpg' id='delivery'></img>
          </div>
          <div className='about-info-contain'>
            <h2>About us:</h2>
            <h4>- We have the largest selection of craft beer and fine wines in Germantown, MD. </h4>
            <h4>- We do special orders and offer discounts on large orders too.</h4>
            <h4>- Located in the Neelsville Village Center, next door to Giant Foods.</h4>
          </div>
          <div className='map-image-div'>
              <a
              id='image-link'
              href='https://www.google.com/maps?q=hop+n+cru&rlz=1C5CHFA_enUS881US881&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjr3bPlg63pAhX5kHIEHbsXBRgQ_AUoA3oECBcQBQ'><img src={map} alt='hop-map' id='map-image'></img></a>
            <div className='image-click-div'>
              <h3>Click to open in google maps</h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}



export default Home
