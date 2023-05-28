import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import moviesLink from './../atoms/apidata'
 export const moviesData = createAsyncThunk("gettingmoviesdata",
  async()=>{
    const response = await fetch(moviesLink)
    const movieslist = await response.json()
    // console.log(movieslist)
    return movieslist.Search
})
// console.log("mvlllkl",moviesData)


const displaySlice =  createSlice({

    initialState:{
        movies:[],
        favourites:[],
        loading:false

    },
    name:"movies",
    reducers:{
        setLoading:(state,action)=>{
          console.log("state",state)
          state.loading = action.payload
        },
        addFavourites:(state,action)=>{
            // const copymovies = []
         const favourite=[...state.favourites];
         const {imdbID,ele,index}=action.payload

         if(favourite.length!=0){
          const uniquemovies = favourite.filter(item=>item.imdbID!==imdbID)
          uniquemovies.push(ele)
          state.favourites=uniquemovies


         }

       
         else{
            favourite[index]=ele
            state.favourites=favourite
      
            
         }
        
                  
        
          console.log(index)
         
         console.log("lakjkladjlkdfakl",favourite[0].imdbID)
          
          console.log("dkjadkmydalj",state.favourites)
        

        },
        deleteItem:(state,action)=>{
            const dummyfavourite = [...state.favourites]
            const index =action.payload
            console.log("dummyylj",dummyfavourite)
            console.log("dilklklk",action)
            dummyfavourite.splice(index,1)
             state.favourites=dummyfavourite


        }


    },
    extraReducers:(builder)=>{
        builder.addCase(moviesData.fulfilled,(state,action)=>{
            console.log("action",action)
          state.movies = action.payload;
          state.loading=false 
        });
        builder.addCase(moviesData.rejected,(state,action)=>{
            // console.log("dljal",action)
            state.movies=[];
            state.loading = false
        });
        builder.addCase(moviesData.pending,(state,action)=>{
            console.log("action pending",action)
        })
    }

    
})

export const {setLoading,addFavourites,deleteItem} = displaySlice.actions;
export default displaySlice.reducer;