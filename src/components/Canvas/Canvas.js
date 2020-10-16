import React, { Component } from 'react'
import Particles from 'react-particles-js'; 
import background from './Background/background.jpg'

export default class Canvas extends Component {
    render() {
        return (
            <Particles
            style={{ 
                position: "fixed", 
                backgroundImage: `url(${background})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            height="100%"
            width="100%"
                params={{
                    particles: {
                        color: {
                            value: "#fff"
                        },
                        line_linked: {
                            color: {
                                value: "#fff"
                            }
                        },
                        number: {
                            value: 100
                        },
                        size: {
                            value: 2
                        },
                    }
                    }}/>
        )
    }
}

