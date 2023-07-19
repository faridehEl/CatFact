import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
const [catFact , setCatFact] = useState("")

useEffect(()=>{
  showFact()
},[]);
const showFact=()=>{
    Axios.get("https://catfact.ninja/fact").then(res=>{
    setCatFact(res.data.fact)
  });
}

  return (
   <div className='showData'> 
    <p>{catFact}</p>
    <button onClick={showFact}>Fetch Data</button>
   </div>
    
  );
}

export default App;
