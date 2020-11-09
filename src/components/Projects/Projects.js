import React from "react";
import { Card, Button, Grid } from "react-bootstrap";
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects-grid">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Example 1</Card.Title>
        <Card.Text>
          Example card 1 
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Example 2</Card.Title>
        <Card.Text>
          Example 2
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Third test</Card.Title>
        <Card.Text>
          Card test 3
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
