import { useEffect, useState } from "react";

const Slider = ({ fetchURL }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((dataApi) => {
        setData(dataApi.results);
        console.log(dataApi.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchURL]);

  const nextSlide = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Precédent</button>
      <div className="slider-items">
        {data.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
          <div key={item.id} className="slider-item">
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title}
            />{" "}
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Suivant</button>
    </div>
  );
};

export default Slider;
