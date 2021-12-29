import { useState } from "react";
import Counter from "./Counter";
import DisplayComponent from "./DisplayComponent";
import Employee from "./Employee";

function App() {

  // const [count,setCount] = useState(0) // Add state for counter component state
  // const addCount=()=>{
  //   setCount(count+1)     // Incement State
  // }
  // let obj = {
  //   title : '1st Counter',
  //   count,
  //   place:'test'
  // }

  let emp = [
    {name:'shreekanth',age:39},
    {name:'Neethu',age:32},
    {name:'Mayu',age:7}
  ]

  const [state,setState] = useState(false)
  return (
    <div className="App">
    {/* <button onClick={addCount}>Add</button> // Increment counter button */} 
    {/* <Counter {...obj} />
    <Counter title='2nd Counter' count={count} /> */}
    {
      //looping the Data
      // emp.map((obj,index)=>{
      //     return(
      //         // <Employee key={index} name={obj.name} age={obj.age} />
      //         <Employee key={index} {...obj} />
      //         )
      // })

      // simplify above code (looping the Data)

      // emp.map((obj,index)=>
      //            (
      //             // <Employee key={index} name={obj.name} age={obj.age} />
      //             <Employee key={index} {...obj} />
      //             )
      //         )
      

    }
   
      <h1 onClick={()=> setState(!state)}>Show/Hide</h1>
      {/* { state ? <DisplayComponent/> : null } */} 
      {/* // Simplify code */}
      { state && <DisplayComponent/> }
    </div>
  );
}

export default App;
