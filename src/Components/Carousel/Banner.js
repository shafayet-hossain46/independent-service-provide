import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const img = "https://img.freepik.com/free-vector/web-development-banner-computer-with-window-computer-with-browser-window_80328-118.jpg?t=st=1657218533~exp=1657219133~hmac=8f141aa08b517a7c1c6021aa26fe604aa2a046f987f49a2f21188d4c25c6f23c&w=1380"


const Banner = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;