import React from 'react'
import {useDispatch, useSelector} from 'react-redux';


const Home = () => {

const dispatch = useDispatch();
const handlerAdd= () =>{
  dispatch({
    type:"increment",
  });
};
const handlerSubt= () =>{
  dispatch({
    type:"decrement",
  });
};

const {count} = useSelector(state=>state.first)


return (
    <div className='home'>

      <button onClick={handlerAdd}>+</button>
      <p>{count}</p>
      <button onClick={handlerSubt}>-</button>
    </div>

  );
};


export default Home