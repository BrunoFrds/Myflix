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

  /* Utilisation du hook "useRef" pour créer une référence "searchRef" qui sera utilisé pour obtenir une référence à l'élément du conteneur de recherche "searchForm". */
  const searchRef = useRef(null);

  /* Appel de la fonction "handleButtonClick" lorsque l'utilisateur clique sur l'icône de la loupe */
  const handleButtonClick = () => {
    /* Ce qui met à jour l'état "isSearchClicked" à "true", affichant la barre de recherche. */
    setSearchClicked(true);

    /* Séléction de l'élément "searchContener" */
    const searchDiv = document.getElementById("searchContener");

    /* Si "searchDiv" existe, on ajoute une classe "visibleInput" à l'élément "searchContener". */
    if (searchDiv) {
      searchDiv.classList.add("visibleInput");
    }
  };

  /* Utilisation du hook "useEffect" pour définir un effet à chaque changement de la valeur de "isSearchClicked". */
  useEffect(() => {
    /* Si "isSearchClicked" à pour valeur "true", alors: */
    if (isSearchClicked) {
      /* On séléctionne l'élément "searchInput". */
      const searchInput = document.getElementById("searchInput");

      /* Et si "searchInput" existe, on lui donne le focus automatiquement. */
      if (searchInput) {
        searchInput.focus();
      }
    }
    /* On inclut "isSearchClicked" dans le tableau de dépendance pour spécifier que l'effet doit être seulement déclenché à chaque changement de "isSearchClicked". */
  }, [isSearchClicked]);

  /* Utilisation du hook "useEffect" pour ajouter et supprimer un écouteur d'évènement "click" à l'élément "searchContener". */
  useEffect(() => {
    /* Appel de la fonction "handleClickOutside" lorsque l'utilisateur clique n'importe où sur la page. */
    const handleClickOustide = (event) => {
      /* Si la référence "searchRef" existe et que l'élément cliqué n'est pas contenu dans "searchRef", cela signifie que le clic est en dehors de la barre de recherche. Dans ce cas, l'état "isSearchClicked" change à "false" pour masquer la barre de recherche. */
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchClicked(false);

        /* Séléction de l'élément "searchContener" */
        const searchContener = document.getElementById("searchContener");

        /* Si "searchContener" existe, on supprime la classe "visibleBar" de l'élément. */
        if (searchContener) {
          searchContener.classList.remove("visibleInput");
        }
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
