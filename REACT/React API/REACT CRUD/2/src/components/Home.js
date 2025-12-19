import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    let history = useNavigate();
    const handleDelete = (id) => {
        var index = Employee.map((e) => {
            return e.id
        }).indexOf(id);

        Employee.splice(index, 1);
        
      history('/'); 7
    }
    const handleEdit = (id,name,age) => {
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('id', id);
    }



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
          Employee && Employee.length > 0
            ? Employee.map((item) => {
              return(  <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                      <Link to={`/edit`}>
                          <Button onClick={() => {
                              handleEdit(item.id, item.age, item.name)
                  }}>Edit</Button>
                      </Link>&nbsp;
                  <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                  </td>
                </tr>
            )})
            : "no data Available" }
        </tbody>

      </Table>

      <Link className="d-grid gap-2" to={`/create`}>
          <Button  size="lg">Create</Button>
      </Link>
    </div>
};

export default Home;
