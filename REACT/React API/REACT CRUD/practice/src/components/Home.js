import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { Link, useNavigate } from "react-router-dom";

class Home extends React.Component {

  history = useNavigate();
  handleEdit = (id, name, age) => {
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('id', id);
  }

  handleDelete = (id) => {
    const index = Employee.map((e) => {
      return e.id
    }).indexOf(id);

    Employee.splice(index, 1);

    this.history('/');
  }

  render() {
    
  
    return <div style={{ margin: "15rem" }}>
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
            Employee && Employee.length > 0 ?
              Employee.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to={'./edit'}>
                        <Button className='btn btn-primary' onClick={() => this.handleEdit(item.id)}>Edit</Button>
                      </Link>&nbsp;
                      <Button className='btn btn-danger' onClick={() => this.handleDelete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              }) : "No Data Available"
          }
        </tbody>
      </Table>
      <Link to={'/create'} className="d-grid gap-2"  >
        <Button size="lg">Create</Button>
      </Link>
    </div>
  }
}

export default Home
