import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return;
  return (
    <div className="w-[150px] rounded-lg  overflow-hidden h-[200px] pr-1.5">
        <img className="w-full h-full" alt="movie logo" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard