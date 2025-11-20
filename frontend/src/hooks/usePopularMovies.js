import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const usePopularMovies=()=>{
  const popularMovies=useSelector(store=>store.movies.popularMovies);
const dispatch=useDispatch();
  const getPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options);
    const json=await data.json();  
     
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    !popularMovies && getPlayingMovies();
  },[]);
}
export default usePopularMovies;
