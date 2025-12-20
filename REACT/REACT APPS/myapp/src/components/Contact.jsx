import React, { useState } from 'react'

const Contact = () => {

  const [name,setName] = useState('INitial');

  return (
    <div>
    <form>
    <input type='text' placeholder='name' onChange={(e)=> setName(e.target.value)} value={name}/>
    <input type='email' placeholder='Email'/>
    </form>

    <button onClick={()=>console.log(name)}>Press</button>
    <p>{name}</p>

    </div>
  )
}

export default Contact