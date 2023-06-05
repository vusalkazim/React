import React, { useState } from 'react'
import "./App.scss"
import Movie from './Moviecontainer/Movie'
import Search from './Search/Search'

const App = () => {

    const [query,Setquery] = useState("");

    const movie =[ 
      {
          img:"https://media.licdn.com/dms/image/D4E03AQGgH9Jn_G-I8Q/profile-displayphoto-shrink_800_800/0/1668333214226?e=2147483647&v=beta&t=NFux47MbVZVKob7HkPGSDDXrgMtE3uCGBrvLy9X84sc",
          name:"Ali",
          surname:"Aghayev"
      },
      {
          img:"https://memorial.az/photos/2021/05/12653-1620801463.jpg",
          name:"Kamran",
          surname:"Qasimov"
      }    
  ]

  return (
    <>
        <Search Setquery={Setquery}></Search>
        <Movie movie={movie} query= {query}  ></Movie>
    </>
  )
}

export default App