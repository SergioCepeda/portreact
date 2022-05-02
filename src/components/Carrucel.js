
import React from 'react';
import { Carousel} from 'react-bootstrap';
import  imagen1 from '../images/equipo.png';
import  imagen2 from '../images/TAS.png';
import imagen3 from '../images/Ta.jpg';
import imagen4 from '../images/ultimo.jpg';


  









const Carrucel = () => {
    


    return (
        <>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={imagen1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={imagen2}
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen3}
      alt="Third slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen4}
      alt="Third slide"
    />
    <Carousel.Caption>
   
     
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
        

   
 
    </>

    )
}

export default Carrucel;