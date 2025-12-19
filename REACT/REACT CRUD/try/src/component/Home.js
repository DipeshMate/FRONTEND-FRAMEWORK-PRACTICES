import React from 'react'
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employer from './Employer';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  let history = useNavigate();
  const handleEdit = (id,name,age) => {
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('id', id);
}


  const handleDelete = (id) => {
    const index = Employer.map((e) => {
      return e.id;
    }).indexOf(id);
    Employer.splice(index, 1);

    history('/');
  }
  return (
    <div  style={{margin:"15rem"}}>
    <Table striped bordered hover size="sm">
      
      <thead>
        <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          Employer && Employer.length > 0 ?
            Employer.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                  <Link to={`/edit`}>
                          <Button onClick={() => {
                              handleEdit(item.id, item.age, item.name)
                  }}>Edit</Button>
                      </Link>&nbsp;
                    <Button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</Button>
                  </td>
                </tr>
              )
           }) :"No Data Available"
        }
      </tbody>
      </Table>
      <Link to={'/create'} className="d-grid gap-2"  >
      <Button size="lg">Create</Button>
      </Link>
    </div>
  )
}

export default Home
