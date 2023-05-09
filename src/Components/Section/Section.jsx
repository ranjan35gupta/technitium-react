import {ar} from './../molecules/Header'
import Button from './../atoms/Button'
import  styles from './Section.module.css'
import {FcStumbleupon} from 'react-icons/fc'
import {BsList} from 'react-icons/bs'
import { useState,useRef } from 'react'
// import New from './Vari'

export default function Section(){
    const [values,setValues]=useState("Section_headers__w91NE")
    let curRef = useRef("headers")
    const login = "Login"
    const see_how ="See How"
    
    function handleToggle(){
        values==='Section_headers__w91NE'?setValues("Section_header__gYk9X"):setValues("Section_headers__w91NE")

    }
    console.log(values)
    
    //Section_header__gYk9X
    
    
    
    console.log()
    return(
           <div>
            <div className={styles.container1}>
             <FcStumbleupon className={styles.stumble}/>
            
            <header className={values} >
                {ar.map(element=><li>{element}</li>)}
                <Button login={login}/>

            </header>
            
            <BsList className={styles.bslist}
            onClick={handleToggle}/>
            </div>
            <div className={styles.hero}>
                <div className={styles.para}>
                <h1 className={styles.heading1}>Be There</h1>
                <p className={styles.para2}>Deliver brilliant messages in the moments that truly define your brand</p>
                <Button login={see_how}/></div>
                <img className={styles.image} src="https://media.istockphoto.com/id/1342235356/photo/cheerful-african-american-student-girl-using-mobile-phone-standing-outside.jpg?b=1&s=170667a&w=0&k=20&c=6mnq_qIYczmPxlor0sQFT5fUY58EdBTSUroJRJ64Ng0="/>
            
            </div>
            </div>
        
    )
}