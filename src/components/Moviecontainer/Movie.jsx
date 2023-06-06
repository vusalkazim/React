import React from 'react'
import "./Movie.scss"
import MovieCard from '../MovieCard/MovieCard'
const Movie = (props) => {
    const {query,movie,deleteMovie}=props;  
  

    return (
        <>
           <div className='card_content'>   
           {
            movie
                .filter(i => i.name.toLowerCase().includes(query.toLowerCase()))
                .map(i =>  <MovieCard id={i.id} deleteMovie = {deleteMovie}  key = {i.id} img={i.img} name={i.name} surname={i.surname} /> )
           }
           </div>  
        </>
    )
}

export default Movie;