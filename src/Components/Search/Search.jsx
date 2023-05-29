/* Import des hooks "useEffect, useRef, useState" de la bibliothèque React pour gérer le cycle de vie, les références et les états. */
import { useEffect, useRef, useState } from "react";
/* Import du composant "FontAwesomeIcon" de la bibliothèque "@fortawesome/react-fortawesome" pour afficher l'icône voulue à l'aide de la bibliothèque "@fortawesome/free-solid-svg-icons". */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* Création de la constante "searchGlass" qui contient notre icône qui sera utilisée pour afficher l'icône dans notre composant. */
const searchGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

/* Création du composant. */
const Search = () => {
  /* Utilisation du hook "useState" pour gérer l'état "isSearchClicked" qui représente si la barre de recherche est cliqué ou non. 
  "setSearchClicked" permet de mettre à jour cet état. */
  const [isSearchClicked, setSearchClicked] = useState(false);

  /* Séléction de l'élément "searchContener" */
  const searchDiv = document.getElementById("searchContener");

  /* Séléction de l'élément "searchInput". */
  const searchInput = document.getElementById("searchInput");

  /* Utilisation du hook "useRef" pour créer une référence "searchRef" qui sera utilisé pour obtenir une référence à l'élément du conteneur de recherche "searchForm". */
  const searchRef = useRef(null);

  /* Appel de la fonction "handleButtonClick" lorsque l'utilisateur clique sur l'icône de la loupe */
  const handleButtonClick = () => {
    /* Ce qui met à jour l'état "isSearchClicked" à "true", affichant la barre de recherche. */
    setSearchClicked(true);
    /* Et ajoutant une classe "visibleBar" à lélément "searchContener" */
    searchDiv.classList.add("visibleInput");
    /* Et en mettant directement le focus sur l'input. */
    searchInput.focus();
  };

  /* Utilisation du hook "useEffect" pour exécuter une fonction après le rendu du composant. */
  useEffect(() => {
    /* Appel de la fonction "handleClickOutside" lorsque l'utilisateur clique n'importe où sur la page. */
    const handleClickOustide = (event) => {
      /* Si la référence "searchRef" existe et que l'élément cliqué n'est pas contenu dans "searchRef", cela signifie que le clic est en dehors de la barre de recherche. Dans ce cas, l'état "isSearchClicked" change à "false" pour masquer la barre de recherche. */
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchClicked(false);
        /* Et supprimer la classe "visibleBar" de l'élément "searchContener" */
        searchDiv.classList.remove("visibleInput");
      }
    };

    /* Ajout d'un écouteur d'évènement "click" à "document" pour écouter les clics et éxècuter ensuite la fonction "handleClickOutside". */
    document.addEventListener("click", handleClickOustide);

    /* Suppression de l'écouteur d'évènements lors du démontage du composant afin de ne plus écouter les "click". */
    return () => {
      document.removeEventListener("click", handleClickOustide);
    };

    /* Tableau de dépendances vide pour indiquer que l'effet doit être éxécuté qu'une seule fois. */
  }, []);

  /* Appel de la fonction "handleSearchSubmit" pour empêcher la page de se recharger. */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="searchContener" ref={searchRef}>
      <span className="searchIcon" onClick={handleButtonClick}>
        {searchGlass}
      </span>
      {isSearchClicked && (
        <form className="searchForm" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="searchInput"
            placeholder="Titres, personnes, genres"
            id="searchInput"
          />
        </form>
      )}
    </div>
  );
};

export default Search;
