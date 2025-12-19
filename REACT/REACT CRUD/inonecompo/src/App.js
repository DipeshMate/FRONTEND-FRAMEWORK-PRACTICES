import { studentData } from "./Student";
import { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState(0);
  const [isSave, setSave] = useState(false);

  useEffect(() => {
    setData(studentData)
  }, [])



  //all Handles

  const handleSave = (e) => {
    e.preventDefault();
  
    const dt = [...data];
    const a = data.length + 1,
      b = name,
      c = age;
     dt.push({ id: a, name: b, age: c });
    setData(dt);
    handleClear();
  }

  
  const handleUpdate = (e) => {
    e.preventDefault();

    const index = data.map((e) => {
      return e.id
    }).indexOf(id);

    const dt = [...data];
    dt[index].name = name;
    dt[index].age = age;

    setData(dt);
    handleClear();

  }
  const handleClear = () => { 
    setId(0);
    setAge("");
    setName("");
    setSave(false);
  }

  
  const handleEdit = (id) => {
    
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setSave(true);
      setName(dt[0].name);
      setAge(dt[0].age);
      setId(id);
    }
  }
  const handleDelete = (id) => {
    const dt = data.filter(item => item.id !== id);
    setData(dt);
  }


  return (
    <div className="App" style={{ alignItems: "center", margin: "15rem" }}>
      <h1>Student Details</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <div>
          <label>
            Name :
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
                
          <label>
            Age :
            <input
              type="text"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </label>
        </div>
        {
          !isSave ? 
          
          <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
            Save
              </button>
            :
            <button className="btn btn-success" onClick={(e) => handleUpdate(e)}>
            Update
          </button>
        
        }
        <button className="btn btn-secondary" onClick={() => handleClear()}>
          Clear
        </button>
      </div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#Id</th>
          <th>Name</th>
            <th>age</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
         {
           data && data.length > 0 ? data.map((item, index) => {
            return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <Button className="btn btn-primary" required onClick={()=>{handleEdit(item.id)}}>Edit</Button>&nbsp;
                  <Button className="btn btn-danger" required onClick={() => { handleDelete(item.id) }}>Delete</Button>
                 </td>
                </tr>
            )
    
           }) : "No data Available"
            
          }
      
      </tbody>
      </Table>
      </div>

  );
}

export default App;
