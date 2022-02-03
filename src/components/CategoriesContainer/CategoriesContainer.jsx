import { useSelector } from "react-redux";
import CategoriesElem from "../CategoriesElem";
import styles from "./CategoriesContainer.module.css";

export const CategoriesContainer = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={styles.CategoriesContainer}>
      {categories ? (
        categories.map((category) => {
          return <CategoriesElem category={category} key={category} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
