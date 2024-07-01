import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Aboutpae from './components/Aboutpae';
import Experience from './components/Experience';
import Home from './components/Home';
import Skills from './components/adminpanel/Skills';
import Work from './components/Work';

function App() {
  
  const skillsData = [
    {name: 'HTML', percentage: 90 },
    {name: 'CSS', percentage: 80 },
    {name: 'JavaScript', percentage: 75 },
    // Add more skills as needed
];
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
     
      <Route path='/about' element={<Aboutpae  />} />
      <Route path='/resume' element={<Experience skills={skillsData}/>} />
      <Route path='/adminpanel' element={<Skills  />} />
      <Route path='/mywork' element={<Work />} />
    </Routes>
    </BrowserRouter>
    
     <div>

{/* <Navbar/>
<Banner/>
<Aboutpae/>
<Experience/> */}

</div>
    </>
   
  );
}

export default App;
