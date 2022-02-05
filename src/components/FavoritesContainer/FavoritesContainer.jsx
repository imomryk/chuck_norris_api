import { useSelector } from "react-redux";
import { JokesElem } from "../JokesElem/JokesElem";
import styles from "./FavoritesContainer.module.css";

export const FavoritesContainer = () => {
  const favorites = useSelector((state) => state.favorites);
  const openFavorites = useSelector((state) => state.openFavorites);
  return (
    <div
      className={
        openFavorites
          ? styles.favoritesContainerOpen
          : styles.favoritesContainer
      }
    >
      <h3 className={styles.favoritesContainer_header}>Favorites</h3>
      {favorites &&
        favorites.map(({ categories, updated_at, id, url, value }) => {
          return (
            <JokesElem
              key={id}
              categories={categories}
              updated_at={updated_at}
              id={id}
              url={url}
              value={value}
              isFavoriteElem={true}
            />
          );
        })}
    </div>
  );
};
