import React from "react";
import { Card, Button, Grid } from "react-bootstrap";
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects-grid">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>DevOps Project</Card.Title>
        <Card.Text>
        Group project to deploy an application made with Angular on to AWS with Terraform to deploy IAAC, containerised and deployed using K8s & Docker Compose
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Travel Roulette</Card.Title>
        <Card.Text>
          Travel Destination generation made with flask, deployed on GCP using technologies for CI such as Docker + Swarm, Ansible, NGINX
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>CRUD App - Currency Converter</Card.Title>
        <Card.Text>
        Currency Converter application with CRUD features made with flask deployed on GCP with technologies such as Gunicorn & Jenkins.
        </Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
