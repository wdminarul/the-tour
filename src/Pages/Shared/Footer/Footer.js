import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./footer.css"

const Footer = () => {
    return (
        <div className="bg-dark text-light pt-5 mt-5">
            <Container>
            <Row>
    <Col xs={6} md={4} className="p-3">
      <h2 className="text-danger">About Us</h2>
      <p>The platform was launched in 1974 and 1975 and continues to achieve results. With these goals and objectives in mind, the first meeting of the Travel Agents of Bangladesh was held on 22nd October 1976.</p>
    </Col>
    <Col xs={6} md={4} className="p-3 general-services">
    <h2 className="text-danger">All Services</h2>
    <p>Booking Hotel</p>
    <hr/>
    <p>Plan Ticket</p>
    <hr/>
    <p>Train Ticket</p>
    <hr/>
    <p>Bus Ticket</p>
    <hr/>
    </Col>
    {/* Footer form for subscribe  */}
    <Col xs={6} md={4} className="p-3">
    <h2 className="subscriber text-danger" >Subscribe</h2>
    <Form>
        <input className="w-75" type="text" name="" id=""  placeholder="name"/>
        <br />
        <br />
        <input className="w-75"type="email" placeholder="email"/>
        <br />
        <br />
        <Button className="btn btn-danger">Subscribe</Button>
    </Form>
    </Col>
  </Row>
  <hr/>
  <p className="text-secondary text-center">&copy; Copyright 2021. All Rights Reserved by The-Travel</p>
</Container>
        </div>
    );
};

export default Footer;