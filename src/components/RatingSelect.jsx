import React from 'react'

export const RatingSelect = ({filter, setFilter}) => {
  return (
    <div className='border-black border-solid border-2 w-56'>
        <div>
            <input type="radio" id="huey" name="drone" value="" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="huey">Any rating</label>
        </div>

        <div>
            <input type="radio" id="dewey" name="drone" value="5" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="dewey">5</label>
        </div>

        <div>
            <input type="radio" id="louie" name="drone" value="6" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label  htmlFor="louie">6</label>
        </div>

        <div>
            <input type="radio" id="drama" name="drone" value="7" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="drama">7</label>
        </div>

        <div>
            <input type="radio" id="Thriller" name="drone" value="8" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="Thriller">8</label>
        </div>
    </div>
  )
}
