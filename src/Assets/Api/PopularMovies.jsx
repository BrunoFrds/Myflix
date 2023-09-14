import { useEffect } from "react";

const PopularMovies = () => {
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5ebfb2df8453f4c8e25c83c93fe8c8c0")
      .then((response) => response.json())
      .then((popularMovies) => {
        console.log(popularMovies.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
          
  return null;
};

export default PopularMovies;
