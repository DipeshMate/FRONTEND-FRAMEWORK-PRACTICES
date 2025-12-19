import React, { useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employer from "../component/Employer";
import { useNavigate } from "react-router-dom";


const Edit = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    const index = Employer.map((e) => {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
          
        let dt = Employer[index];
        dt.name = name;
        dt.age = age;
        dt.id = id;

        history('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('name'))  
        setAge(localStorage.getItem('age'))  
        setId(localStorage.getItem('id'))  
      },[])


  return (
    <Form style={{margin:"15rem"}} className="d-grid gap-2" >
    <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" value={name} required onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" value={age} required onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit'>Update</Button>
    </Form>
  )
}

export default Edit
