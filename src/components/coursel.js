import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import item1 from "../images/item1-coursel.jpg";
import item2 from "../images/item2-coursel.jpg";
import item3 from "../images/item3-coursel.jpg";
import item4 from "../images/item4-coursel.jpg";
import item5 from "../images/item5-coursel.jpg";
import item6 from "../images/item6-coursel.jpg";


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const style = {
    objectFit: "cover",
  };
  return (
    <Carousel onSelect={handleSelect}>
      
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item3} alt="Third slide" />
      </Carousel.Item>
      
      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item4} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item5} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="carousel">
        <img className="d-block w-100" src={item6} alt="Second slide" />
      </Carousel.Item>
    
    </Carousel>
  );
}
