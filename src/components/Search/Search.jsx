import React from 'react'

function Search(props) {
  const {Setquery,deleteAllmovie,setShowAddform} = props;
  return (
    <div className='search'>
      <input onInput={e=>Setquery(e.target.value)} type="text" />
      <button onClick={deleteAllmovie} className='danger'>Hamsini Sil</button>
      <button onClick={() => setShowAddform(true) } className='elave'>Elave Et</button>
    </div>
  )
}

export default Search;