import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames,movieResults}=useSelector(store=>store.gpt);
  if(movieNames===null || movieResults===null) return  ;
  return (
    <div className="-mt-[140%] lg:-mt-[33%] relative  w-full  z-10 ">
      {movieNames.map((movie,index)=><MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
      
    </div>
  )
}

export default GptMovieSuggestions