import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useNowPlayingMovies=()=>{
const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
const dispatch=useDispatch();
  const getPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options);
    const json=await data.json();  

    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(()=>{
    !nowPlayingMovies && getPlayingMovies();
  },[]);
}
export default useNowPlayingMovies;
