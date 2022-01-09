import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import { useNavigate } from "react-router-dom";


const style = { color: "blue", fontSize: "0.9em" };


const CardHome = (props) => {
 // const navigate = useNavigate();
  /*const handleClick = () => {
    navigate("/CardDetails");
  };*/

  return (
    <>
    <div>
      <div className="mt-4 ml-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "17em" }}
            src={props.image}
          />
          <Card.Body>
            <Container>
              <Row>
                <Col sm={8}>
                  <Card.Text style={style}>Adresse: {props.adresse}</Card.Text>
                </Col>
                <Col sm={4}>{props.price}ETH</Col>
              </Row>
            </Container>
            <Button
              className="float-md-right"
              size="sm"
              variant="primary"
             // onClick={handleClick}
            >
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
};

export default CardHome;