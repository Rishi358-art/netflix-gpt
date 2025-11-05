import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(video)=>{
     const dispatch=useDispatch();
    const getMovieVideos=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${video}/videos`,options );
        const json=await data.json();
        
        const filterData=json.results.filter((items)=>items.type==="Trailer");
        const trailer=filterData[0];
       
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;