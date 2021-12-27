import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count,setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1)

  }
  return (
    <div className="App">
    <button onClick={addCount}>Add</button>
    <Counter count={count}/>
    </div>
  );
}

export default App;
