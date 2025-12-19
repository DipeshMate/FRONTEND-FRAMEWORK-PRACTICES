import MovieDetails from "../../Component/MovieDetails/MovieDetails";
import type { Metadata } from "next";

interface MovieIdProp{
    params: {
        id: string;
    }
}

export const metadata: Metadata = {
    title: "1-Movie Details",
    description: "1-Movie Details",
    applicationName: "1-Movie Details",
    publisher: "DIPESH MATE",
    keywords: "1-Movie Details",
    generator: "1-Movie Details",
}
  
const getMovieByID = async ( id : string) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const response = await data.json();
    return response;
}

const Movie = async ({ params }: MovieIdProp) => {
    const { id } = params;
    const getMovie = await getMovieByID(id);
    // console.log("getMovie:",getMovie);
     // Extract genre names and spoken language names
    const genreNames = getMovie.genres?.map((genre: { name: string, id: number }) => ({ name: genre.name, id: genre.id }));
    const languageNames = getMovie.spoken_languages?.map((lang: { name: string, english_name: string }) => ({ name : lang.name, english_name: lang.english_name }));
    
    return (
      <MovieDetails
          key={getMovie.id}
          backPosterPath={getMovie.backdrop_path}
          posterPath={getMovie.poster_path}
          releaseDate={getMovie.release_date}
          title={getMovie.title}
          originalTitle={getMovie.original_title}
          description={getMovie.overview}
          rating={getMovie.vote_average}
          genres={genreNames}
          languages={languageNames}
          id={getMovie.id}
          />
  )
}

export default Movie;
