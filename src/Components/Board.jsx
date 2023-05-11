import {React,useState,useRef} from 'react'
import {Square} from "./Square"
export function Board(){
    const [state,Setstate]=useState(Array(9).fill(null))
    const [isXturn,setIsXturn]=useState(true)
    let countRef = useRef(0)
    countRef.current=countRef.current+1
    const checkWinner=()=>{
        const winnerLogic = [[0,1,2],
    [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for( let logic of winnerLogic ){
        const [a,b,c]=logic
        if(state[a]!=null && state[a]===state[b]&&state[a]===state[c]){
           if(state[a]==='X'){
            return "player A is winner"
           }
           else {
            return "player B is winner"
           }
           
        }
    }
    return false
         
    }
    const isWinner = checkWinner();
    const handleClick=(index)=>{
        if(state[index]!==null){
            return
        }
        const copyState = [...state]
        copyState[index]=isXturn?"X":"0"
        
        setIsXturn(isXturn?false:true)
        Setstate(copyState)
        
    }
    const handleReset =()=>{
        setIsXturn(!isXturn)
        Setstate(Array(9).fill(null))
    }
    return(
        <div className='main_container'>
           <h3>It is player {isXturn?"player1":"player2"} turn</h3> 
        <div className="board-container" >
            <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=>handleClick(3)}value={state[3]}/>
            <Square onClick={()=>handleClick(4)}value={state[4]}/>
            <Square onClick={()=>handleClick(5)}value={state[5]}/></div>
            <div className="board-row">
            <Square onClick={()=>handleClick(6)}value={state[6]}/>
            <Square onClick={()=>handleClick(7)}value={state[7]}/>
            <Square onClick={()=>handleClick(8 )}value={state[8]}/></div>
            
        </div>
        <h3>{isWinner?(<>{isWinner} <br/> <button className='btn' onClick={()=>handleReset()}>StartAgain</button></>):(<></>)}</h3>
        <div><button className='btn' onClick={handleReset}>Reset</button></div>
        </div>
    )

}