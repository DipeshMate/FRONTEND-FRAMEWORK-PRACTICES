import React, { useState,useEffect } from "react";
import { Form,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { useNavigate} from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('');

  let history = useNavigate();

  const index = Employee.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dt = Employee.filter((item) => item.id === id);
    

    history('/');
  }
  return (
    <div>
    <Form style={{margin:"15rem"}} className="d-grid gap-2" >
        <h1 style={{ textAlign: 'center' }}>Edit Employee Details</h1>
        
        <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" value={name} required onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" value={age} required onChange={(e)=>setAge(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formAddress">
        <Form.Control type="text" placeholder="Enter Your Address" value={address} required onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>
        
    <Button onClick={(e)=>handleSubmit(e)} type='submit'>Update</Button>
    </Form>
    </div>
  )
}

export default Edit;