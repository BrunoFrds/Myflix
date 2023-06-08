import { useEffect } from "react";

const PopularMovies = ({ apiKey }) => {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((popularMovies) => {
        console.log(popularMovies.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  return null;
};

export default PopularMovies;
