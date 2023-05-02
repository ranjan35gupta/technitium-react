import { useRef, useState } from "react"
import './Usercard.css'
export function UserCard({properties}){
    const {id,email,first_name,last_name,avatar}=properties

return(
        <div className="container" >
    <div className="id">Id: {id}</div>
    <div claName="email">Email: {email}</div>
    <div className="firstname">First_name: {first_name}</div>
    <div className="lastname">Last_name: {last_name}</div>
    <img src ={avatar}/>
     
    
    
  </div>

)
}