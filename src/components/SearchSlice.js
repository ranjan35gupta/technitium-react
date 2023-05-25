
import { createSlice } from "@reduxjs/toolkit";


const productSlice= createSlice({
    initialState:{
        product:[],
        setchange:"",
        isValueTrue:true,
        dummyValue:[],
        todoitems:[],
        statusUpdate:false
        
    },
    name:"details",
    reducers:{
        addData:(state,action)=>{
            // console.log("action",action.payload)
            state.product=action.payload;
        },
        setValue:(state,action)=>{

            state.setchange=action.payload
            // console.log("value",action.payload)
        },
        changeValue:(state,action)=>{
            state.isValueTrue=action.payload
        },
        addDummyValue:(state,action)=>{
            
            state.dummyValue=action.payload
            
            

        },
        addTodoItems:(state,action)=>{
            // state.todoitems.splice(0,state.todoitems.length)
           
            state.todoitems.push(action.payload)
            
        
            // console.log("addtodoitems",action)
        },
        changeStatus:(state,action)=>{
            state.statusUpdate=action.payload
        }
    }




})
export const {addData,setValue,changeValue,addTodoItems,addDummyValue,changeStatus} = productSlice.actions;
export default productSlice.reducer;