import Slider from "../../Components/Slider/Slider";

const Accueil = () => {
  return (
    <div className="home">
      <Slider fetchURL={"https://api.themoviedb.org/3/movie/popular?api_key=5ebfb2df8453f4c8e25c83c93fe8c8c0"} />
    </div>
  );
};

export default Accueil;
