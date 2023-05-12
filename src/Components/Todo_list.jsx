import { indexOf } from 'lodash'
import styles from './Todo_list.module.css'
import {useState,useRef, useEffect} from 'react'
export default function Todo_list(){
    const [task, setTask] = useState('')
    const [count, Setcount] = useState(0)
    const [data,setData] = useState([])
    const [values,setValues] = useState([])
    const [iscompleted,setIscompleted] = useState(false)
    let count1  = useRef(0)
    

    
    const handleChange=(e)=>{
        setTask(e.target.value)
        
}
    const handleSubmit =(e)=>{
        count1.current=count1.current+1
        Setcount(pre=>pre+1)
        
    e.preventDefault()
    const copyData=[...data]
   
    copyData.push(task)
    setData(copyData)
    setValues(copyData)
   
        setTask('')

}
function handleDelete(index){
    
    const copyData=[...data]
    copyData.splice(index,1)
    setData(copyData)
   

}

const handleComplete=(index)=>{
    const duplicate = [...values]
    duplicate[index]=false
    setValues(duplicate)
      

    setIscompleted(!iscompleted)
    if(count>0){
    Setcount(pre=>pre-1)}

    
    
}

    return(
        <div  className={styles.container}>
            <h2>{`Pending tasks {${count}}`}</h2>
            <ul className={styles.list}>
            {data.map((ele,index)=>{
                return(
                    <div key={index} className={styles.listing}>
                    <li className={styles.l2} key={index}><p className={values[index]?"":styles.p2}>{ele}</p>
                    </li>
                    <button className={styles.btn} onClick={()=>handleComplete(index)}>complete</button>
                    <button className={styles.btn1} onClick={()=>handleDelete(index)}>X</button>
                    
                    </div>
                )
            })}
            </ul>

            <form onSubmit={handleSubmit}>
            <input className={styles.inputs} value={task}  onChange={(e)=>handleChange(e)}placeholder='Add a new task'/>
            </form>
        </div>
    )
}