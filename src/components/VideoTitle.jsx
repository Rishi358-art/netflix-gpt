import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute flex flex-col  gap-4 top-[65%] md:top-[40%] lg:top-[50%] left-[10%] bg-linear-to-r z-10 from-black/20">
        <h1 className="text-3xl  text-white font-bold">{title}</h1>
        <p className="hidden lg:block lg:w-[600px] text-white text-justify">{overview}</p>
        <div className="flex gap-2.5">
            <button className="bg-white w-25 p-1.5 rounded-[5px] shadow- hover:bg-white/70"><i className="fa-solid fa-play"></i> Play</button>
            <button className="bg-white/30 w-[130px] p-1.5 rounded-[5px] text-white shadow-2xl"><i className="fa-solid fa-circle-info"></i>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle