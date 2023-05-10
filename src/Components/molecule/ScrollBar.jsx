import React from 'react'
import {Card} from './../atom/Card'
import axios from 'axios'
import {useEffect,useState} from 'react'
import styles from './ScrollBar.module.css'


const ScrollBar = () => {
    const[values,setValues]=useState([])
    
   useEffect(()=>{
    fetchingData()
   },[])
    function fetchingData(){
        axios.get("https://reqres.in/api/users/")
        .then(response=>setValues(response.data.data))
        .catch((error)=>console.log(error))
}


  return (
    <div className={styles.card}>
        {values.map(element=>{
            return(<div className={styles.inneritem} >
                <Card cardDetails={element}/>
            </div>)
        })}
        
    </div>
  )
}

export default ScrollBar