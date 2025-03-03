import React from 'react';
import MovieCard from "./MovieCard";


const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='list'>
        <h1>{title}</h1>
        <div >
            <div className='listtwo'>
            {movies && movies.length > 0 ? (
            movies.map((movie, index) => (   
              <MovieCard key={index} posterPath={movie?.poster_path} />
            ))
          ) : (
            <p>Loading movies...</p> 
          )}
         
        </div>
        </div>
    </div>
  )
}

export default MovieList;