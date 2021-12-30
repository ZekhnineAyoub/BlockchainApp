import React from "react";
import Background from "../assets/bg.jpg";
import MorrocoImg from "../assets/MorrocoImg.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import { useNavigate } from "react-router-dom";


var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`,
};

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 10,
    width: '34vw',
  }
}

const Body = () => {
  const navigate = useNavigate();

  const handleClick1=()=>{
    navigate("/List");
 }

  const handleClick2=()=>{
    navigate("/Creer");  
  }

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
                    <Button variant="primary" size="lg"  onClick={handleClick1}>
                      Explore
                    </Button>{" "}
                    <Button variant="success" size="lg" onClick={handleClick2}>
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="pt-3 pl-4 ">
              <Card className="mt-5 ml-5"  style={styles.card}>
                <Card.Img variant="top" src={MorrocoImg} style={styles.card} />
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
