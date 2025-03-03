import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VedioBackgrd from './VedioBackgrd'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if ( movies === null) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;
  return (
    <div className='main'>
      <VedioTitle title={original_title} overview={overview}/>
      <VedioBackgrd movieId={id}/>

    </div>
  )
}

export default MainContainer;