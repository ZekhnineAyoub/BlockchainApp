import React from "react";
import Navbar from "../components/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faExclamation } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const style = { color: "blue", fontSize: "1.5em" }

const Creer = () => {
  return (
    <div>
      <Navbar />

      <div className="d-flex justify-content-center pt-3">
        <h4>You need an Ethereum wallet to use OpenSea </h4>
        <FontAwesomeIcon className="ml-3"  style={style} icon={faExclamation}/>
      </div>

      <div className="d-flex justify-content-center pt-2">
        <p>
          Connect with one of our available wallet info providers or create a
          new one.
        </p>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Creer;
