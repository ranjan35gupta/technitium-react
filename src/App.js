import logo from './logo.svg';
import './App.css';
import { UserCard } from './Components/Usercard';
// import Profilecard from './Fetch/Fetchdata';
import { useEffect, useState } from "react";

function App() {
  const [values, setValues] = useState([]);
  const [isvalues1, setIsValues1] = useState(true);

  
  async function fetchData() {
    if(isvalues1){
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const  responsegot = await response.json();
      setValues(responsegot.data);
    } catch (error) { }
    setIsValues1(false)
  
  }
    else{
      setValues([])
      setIsValues1(true)
    }
  }
  return (
    <>
    {
      values.map(element=>{
         return <UserCard properties={element}/>
      })
    }
    
  
    <button onClick={fetchData}>Click me</button>
    
    </>
  );
}

export default App;