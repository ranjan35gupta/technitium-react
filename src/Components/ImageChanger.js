import {useEffect, useRef,useState} from 'react'
import './ImageChanger.css'
import {ar} from './atoms/array';
export function ImageChanger(){
    const [count,setCount]=useState(0)
    let imageRef = useRef()
    
    function handleEvent(){
        
        setCount(prev=>prev+1)
       
            
        
        
    }
    useEffect(()=>{
        
    
    if(count<ar.length){
        console.log(count)
        imageRef.current.src=ar[count]
    }
    else{
        setCount(0)
    }
        
    },[count])
    
    return(
        <div className='imagechanger'>
            <img  ref={imageRef}/>
            <button className='btn' onClick={handleEvent}>Change the image</button>
        </div>

    )
}