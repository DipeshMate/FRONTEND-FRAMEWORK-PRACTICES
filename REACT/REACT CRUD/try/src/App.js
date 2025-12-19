import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/component/Home';
import Add from '../src/component/Add';
import Edit from '../src/component/Edit';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Add/>} />
        <Route path="/edit" element={<Edit/>} /> 
      </Routes>
      </Router>
    </div>
  )
}

export default App
