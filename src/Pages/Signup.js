import React,{Component} from 'react'
import { Footer } from '../Components/footer'
import { Navbarr } from '../Components/navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


    export class Signup extends Component {

        render()
        {
            return(
<>
                <Navbarr/>
                <div className='container'>
                    
                    
                    <Col md={{ span: 6, offset: 3 }}>
      <Form className="signUpForm">
        <h3 className="signUpHeader">Sign up as adviser</h3>
        <p className="signUpText">
          Enter deatails to create your <b>Advisor</b> account
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="David Parker" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="davidparker@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="7234794548" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Incedo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Gurugram" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Haryana" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="#123" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="awehb@123" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="awehb@123" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      </Col>
    
                    <Footer/>
                </div>
</>
            )
        }
}