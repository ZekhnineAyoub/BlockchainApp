import React from "react";
import CardHome from "./CardHome";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const List = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col sm><CardHome adresse="Marrakech massira 1" price="1" /></Col>    
          <Col sm><CardHome adresse="Marrakech Gueliz" price="35" /></Col>    
          <Col sm><CardHome adresse="Marrakech Jamea el fena" price="25"/></Col>    
          <Col sm><CardHome adresse="Marrakech Riad Al Andalous" price="77" /></Col>    
          <Col sm><CardHome adresse="Marrakech Gueliz" price="35" /></Col>    
          <Col sm><CardHome adresse="Marrakech Riad Al Andalous" price="77" /></Col>    

        </Row>
      </Container>
    </div>
  );
};

export default List;


