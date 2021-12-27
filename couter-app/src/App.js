import { useState } from "react";
import Counter from "./Counter";
import Employee from "./Employee";

function App() {
  const [count,setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1)
  }
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
  return (
    <div className="App">
    <button onClick={addCount}>Add</button>
    {/* <Counter {...obj} />
    <Counter title='2nd Counter' count={count} /> */}
    {
      // emp.map((obj,index)=>{
      //     return(
      //         // <Employee key={index} name={obj.name} age={obj.age} />
      //         <Employee key={index} {...obj} />
      //         )
      // })

      // simplify above code

      emp.map((obj,index)=>
                 (
                  // <Employee key={index} name={obj.name} age={obj.age} />
                  <Employee key={index} {...obj} />
                  )
              )

    }
    </div>
  );
}

export default App;
