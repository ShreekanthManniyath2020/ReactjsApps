import React,{useState,useEffect} from 'react'

function DisplayComponent() {
    
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('Mounting');
        console.log('Updating ' + count);
        return()=>{
            console.log('Clean up : ' + count); 
        }
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am Component : {count} </h1>
        </div>
    )
}

export default DisplayComponent
