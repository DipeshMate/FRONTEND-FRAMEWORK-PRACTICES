import React, { useState } from "react"
import './App.css'; 
import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';

export default function App() {

  const [markdown, setmarkdown] = useState('Text Hereeee...');

  function handleChange(e){
    setmarkdown(e.target.value);
  }

  return(

  <div className="app"> 
    <textarea onChange={handleChange}  value={markdown}/>
  <div className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown)}}/>
  
  <ReactMarkdown className="preview" sourcePos={markdown} />
  </div>

  )
}
