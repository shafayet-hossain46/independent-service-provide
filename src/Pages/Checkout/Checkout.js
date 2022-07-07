import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Checkout = () => {
  return (
    <div className="w-25 mx-auto mt-5 rounded border shadow p-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Number" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Check Out
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
