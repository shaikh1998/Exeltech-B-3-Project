import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';

function FormTwo() {
    const [height,setHight]=useState("")
    const [weight,setWeight]=useState("")
    const [chest,setChest]=useState("")
    const [age,setAge]=useState("")
    const formTwoDispatch=useDispatch()
    const navigate = useNavigate()
    const handleClick=(e)=>{
        e.preventDefault()
        formTwoDispatch({type:"FORM_TWO_DATA",
        payload:{height,weight,chest,age}
      })
        navigate("/formthree");
    }
  return (
    <Form>
     
        <Form.Label>Height</Form.Label>
        <Form.Control type="number" placeholder="height"onChange={(e)=>setHight(e.target.value)} />
        <Form.Label>waight</Form.Label>
        <Form.Control type="number" placeholder="waight" onChange={(e)=>setWeight(e.target.value)}/>
        <Form.Label>Chest</Form.Label>
        <Form.Control type="email" placeholder="Chest" onChange={(e)=>setChest(e.target.value)}/>
        <Form.Label>Age</Form.Label>
        <Form.Control type="email" placeholder="Age"onChange={(e)=>setAge(e.target.value)} />
        <Link to="formthree">
      <Button variant="primary" type="Next" onClick={handleClick}>
      
      Next
      </Button>
      </Link>
    </Form>
  );
}
export default FormTwo