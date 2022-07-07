import React from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Service = ({service}) => {
  const { name, img, Description } = service;
  const navigate = useNavigate()

  const handleCheckout = id => {
    navigate('/checkout')
  }
  
  return (
    <Col>
      <Card className="mb-4">
        <Card.Img variant="top" style={{ height: "250px" }} src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{Description.slice(0, 150)}</Card.Text>
          <div className="d-grid gap-2">
            <Button onClick={handleCheckout} variant="primary" size="lg">
              Checkout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
