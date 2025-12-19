import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/create" element={ <Create/>} />
          <Route path="/Read" element={ <Read/>} />
          <Route path="/Update" element={ <Update/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
