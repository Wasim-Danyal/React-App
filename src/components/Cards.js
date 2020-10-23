import React, { Component } from 'react'
import './Cards.css';
import { Card, Button, Grid } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        return (
            <div className='cards'>
      <h1>Adventure starts here</h1>
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
          Lorem Ipsum
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
          Lorem Ipsum        
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
        Lorem Ipsum
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
        </div>

    )
  }
}