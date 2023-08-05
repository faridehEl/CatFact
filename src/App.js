import {  useState } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
const [catFact , setCatFact] = useState("")
const [showCatFact,setshowCatFact]=useState('true')

// useEffect(()=>{
//   showFact()
// },[]);
const showFact=()=>{
    Axios.get("https://catfact.ninja/fact").then(res=>{
    setCatFact(res.data.fact)
  });
  setshowCatFact('false')
}

  return (
   <div className='showData'> 
       <Router>
      <Routes>
        <Route  path='/home' element={<Home></Home>}/>
        <Route  path='/about' element={<About></About>}/>
      </Routes>
    </Router>
    <button onClick={showFact}>Fetch Data</button>
    {showCatFact === 'false' ?  <p>{catFact}</p> : <p>NO message</p>}
   </div>
    
  );
}

export default App;
