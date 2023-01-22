import { TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './App.css';
// import { GenreSelect } from './components/GenreSelect';  
import { RatingSelect } from './components/RatingSelect';
import { SearchedItem } from './components/SearchedItem';
import { WithSelects } from './components/WithSecelcts';

function App() {

  
  let arr = [
    {
      id: 1,
      name: "The Matrix",
      rating: 7.5,
      genre: "action"
    },
    {
      id: 2,
      name: "Focus",
      rating:6.9,
      genre: "comedy"
    },
    {
      name: "The Lazarus Effect",
      rating: 6.4,
      genre: "thriller"
    },
    {
      id: 3,
      name: "Everly",
      rating: 5.0,
      genre: "action"
    },
    {
      id: 4,
      name: "Maps to the Stars",
      rating: 7.5,
      genre: "drama"
    }
  ]
  const [query , setQuery] = useState("")
  const [genre , setGenre] = useState([])
  const [rating , setRating] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const sortedRating = useMemo(() => {
    if(rating.length !== 0){
      let filtered = []
      for(let item of rating){
        filtered.push(...arr.filter(elem => Math.round(elem.rating) == item))
      }
      return filtered
    }
    return arr
  },[rating, arr])

  const sortedGenre = useMemo(() => {
    if(genre.length !== 0){
      let filtered = []
      for(let item of genre){
        filtered.push(...sortedRating.filter(elem => elem.genre == item))
      }
      return filtered
    }
    return arr
  },[genre, arr])

  const searched = useMemo(() => {
    let searched = sortedGenre.filter(item => item.name?.toLowerCase().includes(query?.toLowerCase()));
    return searched
  },[query, arr])


  return (
    <div className="App m-auto">
      <div className="top flex">
        <TextField id="outlined-basic" onFocus={() => setIsOpen(!isOpen)} label="Search" variant="outlined" onChange={e => setQuery(e.target.value )} />
        <WithSelects options={["action", "comedy", "thriller", "drama"]} state={genre} setState={setGenre} label={"Genre"} />
        <WithSelects options={["5", "6", "7", "8"]} state={rating} setState={setRating} label={"Rating"} />
      </div>
      <div className="left flex justify-between">
        <div style={ isOpen === false ? {display: "none"} : {display: "block"}} className="bot border-black border-solid border-2 w-56">
          {
            searched.map((item, index) => isOpen ? <SearchedItem key={index} props={item}/> : "")
          }
        </div>
      </div>
    </div>
  );
}

export default App;