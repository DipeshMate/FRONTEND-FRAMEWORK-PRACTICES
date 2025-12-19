import React,{useState,useRef, useEffect} from 'react'
import { Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employer from './Employer';
import {useNavigate } from "react-router-dom";

const Add = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const previousId = useRef(Employer);

  let history = useNavigate();

  useEffect(() => {
    previousId.current = Employer.length+1;
  },);
  
  const handleSubmit = (e) => {
    e.preventDefault();


    let a = name,
      b = age, c = previousId.current;
    
    Employer.push({ id: c, name: a, age: b });

    history('/');
  }

  return (
    <Form style={{margin:"15rem"}} className="d-grid gap-2" >
    <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
  )
}

export default Add
