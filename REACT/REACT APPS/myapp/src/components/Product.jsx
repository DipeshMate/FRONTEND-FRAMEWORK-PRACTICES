import React from 'react'

const Coin = ({name,symbol,imgsrc,price}) => {

  return (
    <div className="coin">
        <img src={imgsrc} alt={name}></img>
        <h1>{symbol}</h1>
        <p>{name}</p>
        <h4>₹{price}</h4>
        </div>
  )
}

export default Coin