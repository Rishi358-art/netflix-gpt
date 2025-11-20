import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  if (!movies || movies.length === 0) return null;
    
  return (
    <div>
        <div className="py-4 px-14">
            <h1 className="text-3xl pt-1.5 pb-2.5 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide"> 
                <div className="flex ">
                 {
                   movies?.length >= 1 && movies.map((movie)=>(<MovieCard key={movie.id} poster_path={movie.poster_path} />))
                 }
               </div>
                 <style>
                 {`
                 /* Chrome, Safari, Opera */
                div::-webkit-scrollbar {
                   display: none;
                   }
                   `}
                 </style>
            </div>
        </div>
    </div>
  )
}

export default MovieList