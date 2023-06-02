import Promote from "../../Components/Promote/Promote";
import seriesData from "../../Assets/Api/Series";

const Accueil = () => {
  const serieId = "s001";

  const serie = seriesData.find((item) => item.id === serieId);
  console.log(serie);

  if (!serie) {
    return null;
  }

  return (
    <div className="home">
      {serie && (
        <Promote
          key={serie.id}
          id={serie.id}
          cover={serie.cover}
          alt={serie.alt}
          title={serie.title}
          text={"Regardez la saison 3 maintenant"}
          description={serie.description}
        />
      )}
      <div></div>
    </div>
  );
};

export default Accueil;
