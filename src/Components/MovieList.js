
import movies from "../data";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = () => {

  const renderMovies = movies.map(movie => <MovieCard key={movie.id} {...movie}/>)

  return <main className="movie-list">{renderMovies}</main>;
};

export default MovieList;
