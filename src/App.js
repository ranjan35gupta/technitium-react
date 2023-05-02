import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [count,setCount]=useState()
  useEffect( ()=>{
    
    async function changeDog(){
      try{
      const response =await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setCount(data.message)}

      catch(error){
        console.log("it is error",error)
      }
  }
       changeDog()
     },[])
  
  return (
    <div className>
      <img src={count} className='changeImage' style={{height:"300px",
    width:"300px"}}/>
      
    </div>
  );
}

export default App;
