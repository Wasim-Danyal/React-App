import React, { Component } from 'react'
import './HeroSection.css'
import BackgroundVideo from './BackgroundVideo.mp4'

class HeroSection extends Component {
    render() {
      return(
        <div className='hero-container'>
          <video src={BackgroundVideo} autoPlay loop muted />
          <p> Welcome </p>
        </div>
      )
    }
  }
  
  export default HeroSection;