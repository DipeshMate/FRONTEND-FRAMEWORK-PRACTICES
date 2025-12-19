import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../Components/data';

const Create = () => {
  /* 1 */
  // const [values, setValues] = useState('');

  /* 2 */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  let history = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    /* 1 */

    // axios.post('http://localhost:3000/users', values)
    //   .then(res => {
    //     console.log(res);
    //     history('/');
    //   }).catch(err => console.log(err));
 
    /* 2 */
    let a = name,
      b = phone,
      c = email,
      d = data.length + 1;
    data.push({ name: a, phone: b, email: c ,id:d});
    history('/');
  }




  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light' >
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form>
          <div className="mb-2">
            <label htmlFor='name'>Name: </label>
            <input type="text" name='name' required className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor='email'>Email: </label>
            <input type="email" name='email' required className="form-control" placeholder="Enter Email" /*onChange={(e)=>setValues([...values],e.target.value)}*/ onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor='phone'>Phone: </label>
            <input type="text" name='phone'required className="form-control" placeholder="Enter Phone" onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <Link to={'/'}>
          <button type="submit" className="btn btn-success" onClick={(e)=>handleSubmit(e)} >Submit</button>
          </Link>
          <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
        </form>
      </ div>
    </div>
  )
}

export default Create
