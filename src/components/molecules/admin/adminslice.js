import {createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    initialState:{
        question:[]

    },
    name:"questions",
    reducers:{
        previous:(state,action)=>{
         state.question=action.payload
        },
        addQuestion:(state,action)=>{
            const previousData = [...state.question]
            previousData.push(action.payload)
        }

    }

})
export const {previous,addQuestion} = adminSlice.actions

export default adminSlice.reducer;