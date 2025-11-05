import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const usePopularMovies=()=>{
const dispatch=useDispatch();
  const getPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options);
    const json=await data.json();  
     
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    getPlayingMovies();
  },[]);
}
export default usePopularMovies;
