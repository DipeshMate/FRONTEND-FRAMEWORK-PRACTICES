import React, { useEffect, useState } from 'react'
import  StudentData  from '../StudentData.js';
const StudentDetails = () => {
 
  const [data, SetData] = useState(StudentData);
  
  const [name, SetName] = useState('');
  const [age, SetAge] = useState('');
  const [address, SetAddress] = useState('');


  const HandleSubmit = (e) => {
    e.prevent.default()
    
    let dt = data

    const newData = {
      'name': dt.name,
      'age': dt.age,
      'address': dt.address,
    }
    console.log(newData);
    
  }

  useEffect(() => {
    SetData(data)
  }, [])
  return (
    <div className="container d-flex gap-2">
      <div className="col-lg-2 ">
        <h4 className="alert alert-info text-center">Add New Student</h4>
        <div className="form-group d-flex">
          <label  htmlFor="inputName" className='pr-2'>Name</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Name" value={name} onChange={(e)=>SetName(e.target.value)}/>
        </div>
        <div className="form-group d-flex">
          <label  htmlFor="inputName" className='pr-2'>Age</label>
          <input type="number" className="form-control" id="inputAddress" placeholder="Enter Your Age" value={age} onChange={(e)=>SetAge(e.target.value)}/>
        </div>
        <div className="form-group d-flex">
          <label htmlFor="inputName" className='pr-2'>Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Address" value={address} onChange={(e)=>SetAddress(e.target.value)} />
        </div>
      
            <input className="btn btn-success" type="submit" value="Add User" onClick={(e)=>{HandleSubmit(e)}} />
      </div>
      {/* /*---------------------- Displaying Student Details------------------ */ }
      <div className="col-sm-6 mx-auto">
        <div className='d-flex'>
        <h4 className="alert alert-info text-center">Students Details</h4>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Student id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.length > 0 ? data.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.address}</td>
                    <td className='d-flex'>
                    <input className="btn btn-info mr-1" type="submit" value="Edit" />
                    <input className="btn btn-danger" type="submit" value="Delete" />
                    </td>
                  </tr>
                );
            })
            :
            <tr>
            <td colSpan="5" className="text-center">
              No Records Available
            </td>
          </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentDetails
