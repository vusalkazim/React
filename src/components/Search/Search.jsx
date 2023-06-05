import React from 'react'

function Search(props) {
  const {Setquery} = props;
  return (
    <div className='search'>
      <input onInput={e=>Setquery(e.target.value)} type="text" />
      <button>Hamsini Sil</button>
    </div>
  )
}

export default Search;