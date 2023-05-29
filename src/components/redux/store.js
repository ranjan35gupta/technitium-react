import {configureStore} from '@reduxjs/toolkit'
import questionDatas from './../molecules/admin/adminslice'

const store = configureStore({
    reducer:{
    questions:questionDatas
    }
})

export default store;