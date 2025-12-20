import React from 'react'
// import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import "./styles/App.css";
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import Header from './components/Header';
const App = () => {
  return (
      <Router>
        <Header/>
<Routes>
    <Route path="/" element= {<Home/>} />
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
</Routes>

    </Router>
  )
}

export default App;