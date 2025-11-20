import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useUpcomingMovies=()=>{
  const upcomingMovies=useSelector(store=>store.movies.upcomingMovies);
const dispatch=useDispatch();
  const getPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",options);
    const json=await data.json();  
    console.log(json);
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    !upcomingMovies && getPlayingMovies();
  },[]);
}
export default useUpcomingMovies;
