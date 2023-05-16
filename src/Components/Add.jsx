import {useState} from 'react'

export default function Add(){
    const [inputs,setInputs] = useState()
    const [data,setData] = useState([])
    function handleSubmit(e){
        e.preventDefault()
        const dummyData = [...data,{value:inputs}]
        setData(dummyData)
        setInputs('')
        }
        function handleDelete(index){
            const dummydata = [...data]
            dummydata.splice(index,1)
            setData(dummydata)

        }

        
    return(
        <div>
            {data.map((ele,index)=>{
                return(
                    <h4>{ele.value}<button onClick={()=>handleDelete(index)}>delete</button></h4>
                )
            })}
            <form onSubmit={handleSubmit}>
            <input value={inputs} onChange={(e)=>setInputs(e.target.value) } placeholder='Add your name'/>
            </form>
        </div>
    )
}