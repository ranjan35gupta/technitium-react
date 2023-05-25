import { configureStore } from "@reduxjs/toolkit";
import  addData from './SearchSlice'
import  setValue from "./SearchSlice";
import changeValue from './SearchSlice'
import  addTodoItems  from "./SearchSlice";
import  addDummyValue  from "./SearchSlice";
import changeStatus  from "./SearchSlice";


 export const store = configureStore({
    reducer:{
        products:addData,
        setChange:setValue,
        isTrue:changeValue,
        todoList:addTodoItems,
        dummyData:addDummyValue,
        statusUpdation:changeStatus

    }
})