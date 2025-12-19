import Image from "next/image";
import styles from './page.module.css'
import MovieCard from "./Component/MovieCard/MovieCard";

interface MovieDetails{
  id: number;
  title: string;
  overview: string;
  original_title: string;
  popularity: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
}

const API_KEY = process.env.API_KEY;

const getMovieList = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
  const response = await data.json();
  return response;
}

export default async function Home() {
  const movielist = await getMovieList();  
  //console.log(movielist);
  
  return (
      <main className={styles.main}>
        <h1 className={styles.h1}>TMDB Popular Movie List</h1>
        <div className={styles.container}>
        {
        movielist.results.length > 0 && movielist.results.map((movie: MovieDetails) => {
          return (
            <MovieCard 
              key={movie.id}
              posterPath={movie.poster_path}
              backPosterPath={movie.backdrop_path}
              title={movie.title}
              originalTitle= {movie.original_title}
              description={movie.overview}
              id={movie.id}
              rating={movie.vote_average}
              releaseDate={movie.release_date} />
            
          )
        })
       }
        </div>
      </main>
  )
}
