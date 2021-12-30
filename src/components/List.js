import React from "react";
import CardHome from "./CardHome";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import House from "../assets/House.jpg";
import House1 from "../assets/House1.jpg";
import House2 from "../assets/House2.jpg";
import House3 from "../assets/House3.jpg";
import House4 from "../assets/House4.jpg";
import House5 from "../assets/House5.jpg";



const List = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center pt-2">
        <h2>Explore Collections:</h2>
      </div>
      <Container className="pt-3">
        <Row>
          <Col sm>
            <CardHome adresse="Marrakech massira 1" price="1" image={House} />
          </Col>
          <Col sm>
            <CardHome adresse="Marrakech Gueliz" price="35" image={House1} />
          </Col>
          <Col sm>
            <CardHome
              adresse="Marrakech Jamea el fena"
              price="25"
              image={House2}
            />
          </Col>
          <Col sm>
            <CardHome
              adresse="Marrakech Riad Al Andalous"
              price="77"
              image={House3}
            />
          </Col>
          <Col sm>
            <CardHome adresse="Marrakech Gueliz" price="35" image={House4} />
          </Col>
          <Col sm>
            <CardHome
              adresse="Marrakech Riad Al Andalous"
              price="77"
              image={House5}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default List;


