import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function FormThree() {
  const [priadd, setPriadd] = useState("");
  const [secadd, setSecadd] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const formThreeDispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    formThreeDispatch({
      type: "FORM_THREE_DATA",
      payload: { priadd, secadd, city, state },
    });
    navigate("/summary");
  };
  return (
    <Form>
      <Form.Label>Primery Address</Form.Label>
      <Form.Control
        type="email"
        placeholder="First Name"
        onChange={(e) => setPriadd(e.target.value)}
      />
      <Form.Label>Permenent Adderss</Form.Label>
      <Form.Control
        type="email"
        placeholder="Middle Name"
        onChange={(e) => setSecadd(e.target.value)}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        type="email"
        placeholder="Last Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Full Name"
        onChange={(e) => setState(e.target.value)}
      />
      <Button variant="primary" type="submit" onClick={handleClick}>
        Next
      </Button>
    </Form>
  );
}
export default FormThree;
