import { useEffect } from "react";

const PopularSeries = ({ apiKey }) => {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((popularSerie) => {
        console.log(popularSerie.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  return null;
};

export default PopularSeries;
