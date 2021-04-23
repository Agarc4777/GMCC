import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import "./style.css"
import Placeholder from "../../images/placeholder.jpg";

function Carousels() {
  return(
    <div className="container">
      <div className="row">
        <Carousel>
          <Carousel.Item interval={900}>
            <Image id="img"
              className="d-block slide"
              src={Placeholder}
              fluid
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={900}>
          <Image id="img"
              className="d-block slide"
              src={Placeholder} 
              fluid
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={900}>
          <Image id="img"
              className="d-block slide"
              src={Placeholder}
              fluid
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Carousels;