import React from "react";
import Background from "../assets/bg.jpg";
import Testimg from "../assets/logo2.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'

var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`,
};

const Body = () => {
  return (
    <>
      <div style={sectionStyle}>
        <Container>
          <Row md={2}>
            <Col>
              {" "}
              <div className="pt-5 pl-5">
                <div className="pt-5 pl-3">
                  <h1 style={{ fontWeight: "bold" }}>
                    Discover, collect, and sell <br />
                    extraordinary NFTs
                  </h1>

                  <h5 className=" pt-3" style={{ fontStyle: "italic" }}>
                    OpenSea is the world's first and <br /> largest NFT
                    marketplace
                  </h5>
                  <div className="mb-2 pt-4">
                    <Button variant="primary" size="lg">
                      Explore
                    </Button>{" "}
                    <Button variant="success" size="lg">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="pt-5 pl-3 ">
              <Card className="mt-5" border="primary">
                <Card.Img variant="top" src={Testimg} />
                <Card.Body>
                  <Container>
                    <Row md={8}>
                      <Col>
                        <p>Sweet Dream of Salvador Dali</p>
                      </Col>
                      <Col xs lg="1">
                        <FontAwesomeIcon icon={faHome}/>
                      </Col>
                    </Row>
                  </Container>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Body;
