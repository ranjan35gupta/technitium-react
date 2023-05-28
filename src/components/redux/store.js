import {configureStore} from '@reduxjs/toolkit'
import  movieslists from './../organisms/homepageslice'

const store = configureStore({
    reducer:{
        moviesvalues:movieslists

    }
})
export default store;