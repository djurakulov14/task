import React from 'react'

export const SearchedItem = ({props}) => {
  return (
    <div className='seachrched flex justify-between w-52 p-3'>
        <div className="left flex flex-col justify-between ">
            <p>{props.name}</p>
            <p>{props.rating}</p>
        </div>
        <div className="left text-gray-500">
            {props.genre}
        </div>
    </div>
  )
}
