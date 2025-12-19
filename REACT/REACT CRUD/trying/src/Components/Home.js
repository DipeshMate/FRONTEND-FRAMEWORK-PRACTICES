import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { Link ,useNavigate} from "react-router-dom";
const Home = () => {

  const [isUpdate, SetIsUpdate] = useState(false);

    let history = useNavigate();
    const handleEdit = (id,name,age) => {
      localStorage.setItem('name', name);
      localStorage.setItem('age', age);
      localStorage.setItem('id', id);

      SetIsUpdate(true);
  }
    
    const handleDelete=(id) => {
        const index = Employee.map((e) => {
            return e.id;
        }).indexOf(id);

        Employee.splice(index, 1);
        history('/');
    }
  return (
    <div style={{ margin: "15rem" }}>
      <h1 style={{ textAlign: "center" }}>Employee Data</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>E_Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {Employee.length > 0 && Employee
            ? Employee.map((item,i) => {
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link to={'/edit'}>
                        <Button className='btn btn-primary' onClick={()=>handleEdit(item.id)} >Edit</Button>
                      </Link>&nbsp;
                            <Button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            : "No Data Available"}
        </tbody>
      </Table>

      {
        isUpdate === false ?  <Link to="/create" className="d-grid gap-2">
        <Button size="lg">Create</Button>
      </Link> : <Link to="/edit" className="d-grid gap-2">
        <Button size="lg">Edit</Button>
      </Link>
      }
     
    </div>
  );
};
export default Home;
