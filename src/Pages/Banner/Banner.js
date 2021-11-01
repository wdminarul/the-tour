import React from 'react';
import { Carousel } from 'react-bootstrap';
import man from "../../images/Slider/man.jpg"
import london from "../../images/Slider/london.jpg"
import paris from "../../images/Slider/paris.jpg"

const Banner = () => {
    return (
        <div className="pt-5 mt-3">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={man}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-danger">Nature</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={london}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">London</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={paris}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">Paris</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;