import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Phicon from "../../images/phicon.png";
import OilChange from "../../images/oil-change-picture.jpg";
import CarLifted from "../../images/car-on-lift.jpg";
import Button from 'react-bootstrap/Button'
import "./style.css"



function Cards() {
  return(
    <CardGroup>
  <Card className="card">
    <Card.Img variant="top" id="image" src={ OilChange } />
    <Card.Body>
      <Card.Title>Preventative Maintenance</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="#">Learn More</Button>
    </Card.Footer>
  </Card>
  <Card className="card">
    <Card.Img variant="top" id="image" src={ CarLifted } />
    <Card.Body>
      <Card.Title>Auto Repair Services</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="#">Learn More</Button>
    </Card.Footer>
  </Card>
  <Card className="card">
    <Card.Img variant="top" id="image" src={ Phicon } />
    <Card.Body>
      <Card.Title>Schedule Your Appointment</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="#">Schedule Now!</Button>
    </Card.Footer>
  </Card>
</CardGroup>
  )
}

export default Cards