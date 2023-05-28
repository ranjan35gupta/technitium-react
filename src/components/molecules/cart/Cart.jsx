import React from 'react'
import { deleteItem } from '../../organisms/homepageslice'
import { useDispatch,useSelector } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()

  const favouriteMovies = useSelector(state=>state. moviesvalues)
  // console.log("favojro",favouriteMovies)
  const {favourites} = favouriteMovies
  return (
    <div>
      {favourites.map((ele,index)=>{
        return(
          <div>
            <img src={ele.Poster} alt="" />
             <div>{ele.Title}</div>
             <div>{ele.Year}</div>
             <button onClick={()=>{dispatch(deleteItem(index))}}>DeleteItem</button>

          </div>
        )
      })}
    
   
    

   
    </div>
  )
}

export default Cart