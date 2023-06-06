import React, { useState } from 'react'
import "./App.scss"
import Addform from './AddForm/Addform'
import Movie from './Moviecontainer/Movie'
import Search from './Search/Search'

const App = () => {
    const [showAddform,setShowAddform] = useState(false);
    const [query,Setquery] = useState("");

    const [movie,Setmovie] = useState( [ 
      {
          id:1,
          img:"https://media.licdn.com/dms/image/D4E03AQGgH9Jn_G-I8Q/profile-displayphoto-shrink_800_800/0/1668333214226?e=2147483647&v=beta&t=NFux47MbVZVKob7HkPGSDDXrgMtE3uCGBrvLy9X84sc",
          name:"Ali",
          surname:"Aghayev"
      },
      {
          id:2,
          img:"https://memorial.az/photos/2021/05/12653-1620801463.jpg",
          name:"Kamran",
          surname:"Qasimov"
      }    
  ])
  function deleteMovie(id){
      Setmovie(movie.filter(i => i.id !== id));
}

  function AddnewMovie(newMovie){
    Setmovie([...movie,newMovie])
  }

  const deleteAllmovie = ()=> Setmovie([])

  return (
    <>
      {
        showAddform && <Addform AddnewMovie={AddnewMovie} setShowAddform={setShowAddform} ></Addform>
      }
        <Search setShowAddform={setShowAddform}  deleteAllmovie={deleteAllmovie} Setquery={Setquery}></Search>
        <Movie deleteMovie={deleteMovie} movie={movie} query= {query}  ></Movie>
    </>
  )
}

export default App