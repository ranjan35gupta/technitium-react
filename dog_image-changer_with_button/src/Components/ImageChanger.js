import './ImageChanger.css'
import axios from 'axios'
import { useState,useRef, useEffect } from 'react'
export function ImageChanger(){
    const [image,setImage]=useState({data:"https://static.vecteezy.com/system/resources/thumbnails/017/323/715/small/3d-render-adorable-close-up-of-a-american-eskimo-dog-holding-red-rose-in-mouth-on-white-background-photo.jpg"})
    
     let imageRef = useRef();
     
   function handleChange(){
        
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response=>setImage({data:response.data.message}))
        .catch(error=>console.log(error))
        imageRef.current.src=image.data
    
        

    }
    useEffect(()=>{
    
imageRef.current.src=image.data
handleChange()
    
},[])
    
    return(
        <div className='imageChanger'>
            <img  ref={imageRef}/>
      <button onClick={handleChange}> ImageChange</button>
        </div>
    )
}