//import { Firebase } from './firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import React from 'react';
//import {Firebase} from './Firebase/config'
//import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import db from './Firebase/config'

function App() {
 // const querySnapshot = await getDocs(q);
  return (
    <div className="App">
               <button onClick={()=>{
              onSnapshot(collection(db,"products") ,(snapshot)=>{
                console.log(snapshot.docs);
                console.log(snapshot.docs.map(docs => docs.data()));
              })
               }}>Load Data</button>
       </div>
  );
}

export default App;
