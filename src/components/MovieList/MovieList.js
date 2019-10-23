import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';


const MovieList = ({movies}) => {
  let allMovies = movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)

  return(
    <section className='section__movies'>
      {allMovies}
    </section>
  )

}

export default MovieList;