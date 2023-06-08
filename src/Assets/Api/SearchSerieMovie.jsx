import { useEffect } from "react";

const SearchSerieMovie = ({ apiKey, query }) => {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
    )
      .then((response) => response.json())
      .then((popularMovies) => {
        console.log(popularMovies.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey, query]);

  return null;
};

export default SearchSerieMovie;
