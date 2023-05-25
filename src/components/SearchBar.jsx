import { dummydata } from './atoms/dummyData'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {MdKeyboardVoice} from 'react-icons/md'
import './searchbar.css'
import { useDispatch,useSelector } from 'react-redux'
import { setValue,addData,changeValue,addTodoItems,addDummyValue,changeStatus } from './SearchSlice'
import {useEffect} from 'react'

const SearchBar = () => {
    const dispatch = useDispatch()
    const values = useSelector(state=>state)
    // console.log("values",values)
    const {products,setChange,isTrue,todoList,dummyData,statusUpdation} = values
    const {product}=products
    const {setchange}=setChange
    const {isValueTrue}=isTrue
    const {todoitems}=todoList
    const {dummyValue}=dummyData
    const {statusUpdate}=statusUpdation
    console.log("dummyvalue",dummyValue)
    // console.log("maya",isValueTrue)
    console.log("todoitems",todoitems)
    console.log("see",statusUpdate)
    
    // console.log("isvalueis true",isTrue)
    // console.log("productand set change",product)
    // console.log("setchange",setchange)
    // console.log("product",product.product[0])

    useEffect(()=>{
         dispatch(addData(dummydata))
    },[])
 
    




  return (
    <div style={{justifyContent:"center",height:""}}>

<div style={{border:"1px solid black",width:"max-content"}}>

<BsSearch/>
 <input value={setchange} style={{outline:"none",border:"hidden"}} onChange={(e)=>{dispatch(setValue(e.target.value))
dispatch(changeValue(true))}}/>
 <MdKeyboardVoice/>
 </div>
 <div>
 <button onClick={()=>{dispatch(addTodoItems(dummyValue))
 dispatch(setValue(""))
 
}}>AddItem</button>
 </div>
  


{/* {product[0].Name} */}
<div>
{
    product.filter(ele=>{
        const searchItem = setchange?setchange.toLowerCase():""
        const fullName = ele.Name.toLowerCase()
        return searchItem && fullName.startsWith(searchItem)
    })
    .map(ele=>{
        return(
            <li style={{listStyle:"none"}} onClick={()=>{dispatch(setValue(ele.Name))
            dispatch(changeValue(false))
        dispatch(addDummyValue(ele))
        dispatch(changeStatus(false))}} >{isValueTrue?ele.Name:""}</li>
        )
    })
}
</div>

<div>
    
{todoitems.map((ele,index)=>{
    return(
        <div  style={{marginTop:"4rem"}}>
            <div style={{wordSpacing:"5px"}}>Name : {ele.Name}</div>
            <div style={{wordSpacing:"5px"}}>Id : {ele.id}</div>
            <div style={{wordSpacing:"5px"}}>Status : {(!ele.iscompleted)&&statusUpdate?"completed":ele.status}</div>
        <button onClick={()=>{dispatch(changeStatus(true))}} >changeStatus</button>
        
        </div>
        
    )
    
})}

</div>


    </div>
  )
}

export default SearchBar