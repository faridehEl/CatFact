import {  useState } from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/contact';

function App() {
const [catFact , setCatFact] = useState("")
const [showCatFact,setshowCatFact]=useState('false')

// useEffect(()=>{
//   showFact()
// },[]);
const showFact=()=>{
    Axios.get("https://catfact.ninja/fact").then(res=>{
    setCatFact(res.data.fact)
  });
  setshowCatFact('true')
}

  return (
   <div className='showData'> 
       <Router>
      <Routes>
        <Route  path='/home' element={<Home></Home>}/>
        <Route  path='/about' element={<About></About>}/>
        <Route  path='/contact' element={<Contact></Contact>}/>
      </Routes>
    </Router>
    <button onClick={showFact}>Fetch Data</button>
    {showCatFact === 'true' ?  <p>{catFact}</p> : <p>NO message</p>}
   </div>
    
  );
}

export default App;
