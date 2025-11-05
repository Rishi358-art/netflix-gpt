import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useTopRatedMovies=()=>{
const dispatch=useDispatch();
  const getPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",options);
    const json=await data.json();  
    console.log(json);
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=>{
    getPlayingMovies();
  },[]);
}
export default useTopRatedMovies;
