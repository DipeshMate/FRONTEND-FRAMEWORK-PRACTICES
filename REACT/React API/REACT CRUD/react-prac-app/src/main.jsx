import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import StudentDetails from './Components/StudentDetails.jsx'
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
        <Route path='' element={<App/>} />
        <Route path='/StudentDetails' element={<StudentDetails/>} />
    </Routes>
   </Router>
)
