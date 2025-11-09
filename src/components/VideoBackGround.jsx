import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({video}) => {
    const trailerId=useSelector(store=>store.movies?.trailerVideo);
   useMovieTrailer(video);
    
  return (
    <div className=":mt-0 w-full h-full overflow-hidden">
        <iframe  className="w-full h-full z-0 scale-y-330 lg:scale-135  aspect-video pointer-events-none"
    
     src={`https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId?.key}&rel=0`}

     
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         
        >
    </iframe>
    </div>
  )
}

export default VideoBackGround;