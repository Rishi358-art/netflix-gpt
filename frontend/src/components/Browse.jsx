import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch=useSelector(store=>store.gpt?.gptState);
  return (
    <div className="w-full h-full">
      <Header/>
      {showGptSearch ? 
      <GptSearch/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>  
      }
     
      
      </div>
    
  )
}

export default Browse;