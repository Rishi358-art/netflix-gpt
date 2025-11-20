import React, { useRef } from 'react'
import langConst from '../utils/languageConstant';
import ai from '../utils/Gemini';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/constants';
import { addGptMovies } from '../utils/GptSlice';
const GptSearchBar = () => {
  const searchText=useRef(null);
  const lang=useSelector(store=>store.gpt.lang);
  const dispatch=useDispatch();
  const searchMovieTMDB=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",options);
    const json=await data.json();
    const filteredMovie=json.results.filter((movies)=>movies.original_title===movie);

    return filteredMovie;
  }
  const handleGptSearch=async ()=>{
    
    const prompt="Act as a movie recommendation system and suggest some movies for the query : "+searchText.current.value+
    ". only give me the 5 movies ,comma seperated like the example: sholay ,gadar ,golmaal,ghayal,deewar and between the examples only give comma not space and in movie titles dont add spaces give me like 'the dark knight,the batman begins,batman,the batman' just like like no spaces before and after only space should be to seperate words in titles between and all titles must be seperated by , comma not space and if i give you the specific movie name (with year or  without ) then put that movie name first and then others";
//     const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash', 
//     contents: prompt, // This is the final string with the genre inserted
//   });
// const gptMovies=response.text.split(",");
// Replace 'https://your-backend-url.onrender.com/gpt-search' with your actual backend URL
const res = await fetch("https://netflix-gpt-back.onrender.com/gpt-search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ prompt }),
});

const data = await res.json();   // data.text contains GPT response
const gptMovies = data.text.split(",");

console.log(gptMovies);
const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));
const tmdbResults=await Promise.all(promiseArray);
dispatch(addGptMovies({movieResults:tmdbResults,movieNames:gptMovies}));
console.log(tmdbResults);
  }
  return (
    <div className="flex items-start relative  justify-center min-h-screen overflow-x-scroll">
        <img alt="logo" src="https://www.dolby.com/siteassets/xf-site/blocks/hero/netflix-gradient.png?width=1440&crop=1599,0.56" className="fixed w-full h-full z-0" />
        <form className="flex pt-[40%] lg:p-6 mt-[7%] justify-center w-full gap-x-2 z-10" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="bg-black/50  rounded-sm p-6 w-[60%] lg:w-[40%] h-[50px] border text-amber-50 border-gray-400 " placeholder={langConst[lang].gptPlaceHolder}/>
            <button className="p-5 rounded-sm h-[50px] flex items-center  bg-red-800" onClick={handleGptSearch}><p>{langConst[lang].search}</p></button>
        </form>
    </div>
  )
}

export default GptSearchBar;