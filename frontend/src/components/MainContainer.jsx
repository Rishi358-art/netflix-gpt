import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null) return ;
    const mainMovie=movies[0];
    
    const {original_title,overview,id}=mainMovie;
  return (
    <div className=" h-[720px] w-full  ">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround video={id}/>
        <div className="w-full h-[300px] absolute  lg:bottom-0 bg-linear-to-t from-black"></div>
        <div className="w-[10%] lg:w-[400px] hidden lg:h-full absolute top-0 left-0 bg-linear-to-r from-black"></div>
    </div>
  )
}

export default MainContainer