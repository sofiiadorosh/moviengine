import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from "@constants/movies";
import { Movie } from "@models/movie.interface";

export function getMoviesById(ids: number[]): Movie[] {
  const movies = [...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upcomingMovies];
  return movies.filter(movie => ids.includes(movie.id))
    .reduce((acc: Movie[], current: Movie) => {
      if (!acc.some(movie => movie.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
}
