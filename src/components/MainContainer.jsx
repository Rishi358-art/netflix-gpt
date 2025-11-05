import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null) return ;
    const mainMovie=movies[0];
    console.log(mainMovie);
    const {original_title,overview,id}=mainMovie;
  return (
    <div className=" h-[680px] w-full  ">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround video={id}/>
    </div>
  )
}

export default MainContainer