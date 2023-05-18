import React from 'react'
import { questionbank } from './atoms/Questionbank'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './Question.css'

const Question = () => {
    const [currentQuestion,setCurrentQuestin]=useState(0)
    const [score,setScore]=useState(0)
    const [clicked,setClicked] = useState(false)
    const [showScore,setShowScore]=useState(false)
    const handleCorrectAnswer=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
        }
        setClicked(true)

    }
    const handleNextQuestion=()=>{
        setClicked(false)
        if(currentQuestion<questionbank.length-1){
            setCurrentQuestin(currentQuestion+1)
        }
        else{
            setShowScore(true)
        }
    }
  return (
    <div className='app-wrapper '>
        {showScore?(<div>
           <div className='completed'>Completed</div>
           <div className='score-section'>Your Score:{score}/{questionbank.length}</div>
        </div>):(
        <div>
        <div className="question-section-wrapper">
            <div className='question-count'>
                Question {currentQuestion+1} of {questionbank.length}
            </div>
            <div className='question'>
                {questionbank[currentQuestion].question}
            </div>
            </div>
            <div className="answer-section-wrapper">
                {questionbank[currentQuestion].answerList.map((answerOption)=>(
                   <li className='answer-list' key={uuidv4()}>
                    <button className={`answer-button ${clicked && answerOption.isCorrect ? "correct":""}`} onClick={()=>handleCorrectAnswer(answerOption.isCorrect)}>
                        {answerOption.answer}
                    </button>
                   </li> 
                ))}
            </div>

        </div>
        )}
<div>
   <button className='next-button' onClick={handleNextQuestion} disabled={!clicked}>{currentQuestion==9?"submit":"next"}</button>
</div>
    
    </div>
  )
}

export default Question