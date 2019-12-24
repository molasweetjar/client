import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div style={{ margin: 10 }}>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/madewithlove/Screen%20Shot%202019-12-23%20at%2019.22.44.png?authuser=0"
            alt="First slide"
            height='300'
          />
          <Carousel.Caption style={{ color: 'black' }}>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/madewithlove/Screen%20Shot%202019-12-23%20at%2019.28.14.png?authuser=0"
            alt="Second slide"
            height='300'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/madewithlove/Screen%20Shot%202019-12-22%20at%2014.55.33.png?authuser=0"
            alt="Third slide"
            height= '300'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}