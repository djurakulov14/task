import React from 'react'

export const GenreSelect = ({filter, setFilter}) => {
  return (
    <div className='border-black border-solid border-2 w-56'>
        <div>
            <input type="radio" id="huey" name="drone" value="" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="huey">Any genre</label>
        </div>

        <div>
            <input type="radio" id="dewey" name="drone" value="action" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="dewey">Action</label>
        </div>

        <div>
            <input type="radio" id="louie" name="drone" value="comedy" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="louie">Comedy</label>
        </div>

        <div>
            <input type="radio" id="drama" name="drone" value="drama" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="drama">Drama</label>
        </div>

        <div>
            <input type="radio" id="Thriller" name="drone" value="Thriller" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="Thriller">Thriller</label>
        </div>
    </div>
  )
}
