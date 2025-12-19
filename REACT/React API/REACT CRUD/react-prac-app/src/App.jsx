import './App.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const App=()=>{

  return (
    <div style={{ margin: "15rem" }}>

      <h1 className='title'>Hello! Let's Do a Crud Practice!</h1>
         <Link to={'/StudentDetails'}>
           <Button size='lg'>Let's Make a Student Management</Button>
        </Link>
    </div>
  
  )
}

export default App
