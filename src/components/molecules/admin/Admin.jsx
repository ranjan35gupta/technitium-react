import React from 'react'
import questionData from '../../atoms/questionsData'
import {useState} from 'react'

const Admin = () => {
    const [question,setQuestion] = useState()
    const [option1,setOption1] = useState()
    const [option2,setOption2] = useState()
    const [option3,setOption3] = useState()
    const [option4,setOption4] = useState()
    const [answerOption,setanswerOption] = useState()
  return (
    <div>
        <label htmlFor="">
            Question:
        <input  onChange={(e)=>setQuestion(e.target.value)}   placeholder='Enter the question'/>
        </label> <br/>
        <label htmlFor="">
            Option 1:
        <input   onChange={(e)=>setOption1(e.target.value)}             />
        </label><br/>
        <label htmlFor="">
            Option 2:
        <input onChange={(e)=>setOption2(e.target.value)}                  />
        </label><br/>
        <label htmlFor="">
            Option 3:
        <input  onChange={(e)=>setOption3(e.target.value)}            />
        </label><br/>
        <label htmlFor="">
            Option 4:
        <input  onChange={(e)=>setOption4(e.target.ariaValueMax)}           />
        </label> <br />
        <label htmlFor="">
         current answer option no.
        <input   onChange={(e)=>setanswerOption(e.target.value)}   placeholder=' eg. 1 or 2 or 3 or 4 '/>
        </label>
        
    </div>
  )
}

export default Admin