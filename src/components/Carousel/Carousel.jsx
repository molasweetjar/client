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
            src="https://storage.cloud.google.com/ecommerce_project/mola.jpg?authuser=0"
            alt="Mola Sweet Jar"
            height='300'
          />
          <Carousel.Caption style={{ color: 'black' }}>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/eyon.jpg?authuser=0"
            alt="Mola Sweet Jar"
            height='300'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/eli.jpg?authuser=0"
            alt="Mola Sweet Jar"
            height= '300'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://storage.cloud.google.com/ecommerce_project/event.jpg?authuser=0"
            alt="Mola Sweet Jar"
            height= '300'
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}