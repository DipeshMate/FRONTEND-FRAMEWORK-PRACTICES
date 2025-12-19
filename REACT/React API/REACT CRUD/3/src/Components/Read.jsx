import React,{useState,useEffect} from 'react'
import Users from '../Components/data';
import { Link } from 'react-router-dom';


const Read = (id) => {
  const [data, setData] = useState([Users]);

  
  useEffect(() => {
    setData(data);
  }, []);

  
  return (
    <div className='d-flex w-100 justify-content-center align-items-center bg-light vh-100'>
    <div className='w-50 pb-5 pt-3 px-5 rounded text-center bg-white border shadow'>
    <h3>Details of User</h3>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-3'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
      </div>
      </div>
  )
}

export default Read;
