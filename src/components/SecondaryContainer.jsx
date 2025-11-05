import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies);
  return (
    <div className=" bg-black/90"> 
 
    <div className="-mt-32 relative z-20">
       <MovieList title={"NowPlaying"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Popular"} movies={movies?.popularMovies}/>
       <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
    </div>
       
       
    </div>
  )
}

export default SecondaryContainer