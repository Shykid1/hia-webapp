import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import First from '../../images/pexels-pixabay-36717.jpg'
import Second from '../../images/pexels-pixabay-531321.jpg'
import Third from '../../images/pexels-riccardo-bertolo-4245826.jpg'

const CarouselComp = () => {
  return (
    <Carousel className='w-full rounded-xl p-0'>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-xl"
          src={First}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-xl"
          src={Second}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-xl"
          src={Third}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComp