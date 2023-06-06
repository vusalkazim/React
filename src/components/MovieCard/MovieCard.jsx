import React from 'react'

function MovieCard(props) {
  const {deleteMovie,id} = props;
  return (
    <>
    
    <div className="card" >
                <img src={props.img} className="card-img-top"  />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.surname}</p>
                    <a href="#!" className="btn btn-primary">Go somewhere</a>
                    <button onClick={() => deleteMovie(id)} >Sil</button>
                </div>
            </div>
    
    </>
  )
}

export default MovieCard