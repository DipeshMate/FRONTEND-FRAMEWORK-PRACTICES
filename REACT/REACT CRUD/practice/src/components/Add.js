import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        let a = name,
            b = age,
            c = Employee.length + 1;
        
        Employee.push({ id: c, name: a, age: b });

        history('/');
    }

  return (
      <div>
        <Form style={{margin:"15rem"}} className="d-grid gap-2" >
    <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Add
