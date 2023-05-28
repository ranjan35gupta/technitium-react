import React, { Fragment } from 'react'
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addFavourites} from './homepageslice'
import { moviesData } from './homepageslice'
import './home.css'


const Movies = () => {
  const dispatch = useDispatch()

  const valuesMovies = useSelector(state=>state.moviesvalues)
  const {movies}=valuesMovies
  // console.log("ldjal",movies)

  useEffect(()=>{
    dispatch(moviesData())
  },[])
  
  return (
    <Fragment>
    
    <div style={{display:"flex",justifyContent:"space-around"}}>
    
    </div>
    
    
    
    <div className='movies-container'>

{movies.map((ele,index)=>{

  return(
    <div className="movies" keys={ele.imdID}>
    <img src= {ele.Poster}/>
    
    <div>Movie: {ele.Title}
    </div>
    <div>Year&nbsp;&nbsp;&nbsp;: {ele.Year}</div>
    <button onClick={()=>{alert("movie added to your favourite cart")
      dispatch(addFavourites({imdbID:ele.imdbID,ele:ele,index:index}))}}>Add to favourites</button>
    

    </div>
  )



})}



</div>
    
    
    
    </Fragment>
  )
}

export default Movies