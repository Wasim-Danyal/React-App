import React, { Component } from 'react'
import HeroSection from '../HeroSection';
import Cards from '../Cards'

class Mainpage extends Component {
    render() {
      return(
        <>
        <HeroSection />
        <Cards />
        </>
      )
    }
  }
  
  export default Mainpage;