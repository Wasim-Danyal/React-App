import React, { Component } from 'react'
import './Cards.css';
import Card from 'react-bootstrap/Card'

export default class Cards extends Component {
    render() {
        return (
            <div className='cards'>
      <h1>Adventure starts here</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.thefactsite.com/wp-content/uploads/2017/02/top-ten-travel-destinations.jpg" />
        <Card.Body>
          <Card.Title>Destinations</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
      </Card.Body>
      </Card>
        </div>

    )
  }
}