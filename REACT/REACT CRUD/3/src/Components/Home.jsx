import React, { useState,useEffect } from 'react'
// import axios from 'axios';
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from '../Components/data';
import { Link,useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Users);
  }, []);

  let history = useNavigate();
  const handleDelete = (id) => {
    const index = data.map((e) => {
      return e.id;
    }).indexOf(id);

    data.splice(index, 1);

    history('/');
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List Of Users</h1>
      <div className='w-75 rounded text-center bg-white border shadow p-4'>
        <div className='d-flex mb-3 justify-content-end'>
        <Link to={'/create'} className='btn btn-success'>
          Add +
          </Link>
        </div>
          
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => {
                return <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className='btn btn-info me-2'>Read</Link>
                    <Button className='btn btn-primary me-2'>Edit</Button>
                    <Button className='btn btn-danger' onClick={(e)=>handleDelete(d.id)}>Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>

        </Table>
      </div>
    </div>
  )
}

export default Home
