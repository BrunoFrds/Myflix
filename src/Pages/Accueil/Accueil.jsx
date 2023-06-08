import PopularMovies from "../../Assets/Api/PopularMovies";
import PopularSeries from "../../Assets/Api/PopularSeries";
import SearchSerieMovie from "../../Assets/Api/SearchSerieMovie";

const Accueil = () => {
  return (
    <div className="home">
      <PopularSeries apiKey={"d7f02c3620477a7aa43e9ebaf723c525"} />
      <PopularMovies apiKey={"d7f02c3620477a7aa43e9ebaf723c525"} />
      <SearchSerieMovie
        apiKey={"d7f02c3620477a7aa43e9ebaf723c525"}
        query={"Game of thrones"}
      />
      <div className="cardList"></div>
    </div>
  );
};

export default Accueil;
