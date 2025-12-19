import React, { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";

function App() {
  const [data, setData] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstname);
      setLastName(dt[0].lastname);
      setSalary(dt[0].salary);
      setAge(dt[0].age);
    }
  };
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure want to delete this item ?")) {
        const dt = data.filter(item => item.id !== id); // this filter function will return the other remaining id's except the deleted id.
        setData(dt);
      }
    }
  };

  const handleSave = (e) => {
    let error = '';

    if (firstname === '') {
      error += 'firstname is required, ';
    }
    if (lastname === '') {
      error += 'lastname is required, ';
    }
    if (salary === '') {
      error += 'salary is required, ';
    }
    if (age <= 0) {
      error += 'age is required.';
    }

    if (error === '') {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: EmployeeData.length + 1, // 
        firstname: firstname,
        lastname: lastname,
        salary: salary,
        age: age,
      }
      dt.push(newObject);
      setData(dt);//it will set/update the state
    }
    else {
      alert(error);
    }
    };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].firstname = firstname;
    dt[index].lastname = lastname;
    dt[index].salary = salary;
    dt[index].age = age;

    setData(dt);
    handleClear();
  };
  const handleClear = () => {
    setId(0);
    setFirstName("");
    setLastName("");
    setSalary("");
    setAge("");
    setIsUpdate(false);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Employee status</h1>

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
            First Name :
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </label>
          <label>
            last Name :
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </label>
          <label>
            Salary :
            <input
              type="text"
              placeholder="Enter Your Salary"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </label>
          <label>
            Age :
            <input
              type="number"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </label>
        </div>
        {!isUpdate ? (
          <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => handleUpdate()}>
            Update
          </button>
        )}
        <button className="btn btn-danger" onClick={() => handleClear()}>
          Clear
        </button>
      </div>

      <table className="table table-hover" style={{ justifyContent: "center" }}>
        <thead>
          <tr>
            <td>sno</td>
            <td>id</td>
            <td>firstname</td>
            <td>lastname</td>
            <td>salary</td>
            <td>age</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.salary}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
