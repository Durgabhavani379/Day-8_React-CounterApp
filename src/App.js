import React,{useState} from'react';
function App() {

  const[count,setcount]=useState(0);
  const increment=()=>{
    return(setcount(count+1));
  }
  const decrement=()=>{
    return(setcount(count-1));
  }
  
  return (
   <section className="container">
      <div className="counter">
        <h1>Counter App</h1>
      </div>
      <div className="buttons">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      </div>

   </section>
  
  );
}

export default App;
