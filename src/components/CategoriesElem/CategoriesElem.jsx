import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_CURRENT_CATEGORY } from "../../store/types";
import styles from "./CategoriesElem.module.css";


export const CategoriesElem = ({ category }) => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.currentCategory);
  const getClassName = () => {
    return currentCategory === category
      ? styles.activeCategoryElem
      : styles.categoryElem;
  };
  const setCurrentCategory = () => {
    dispatch({ type: SET_CURRENT_CATEGORY, payload: category });
  };
  return (
    <span className={getClassName()} onClick={()=>setCurrentCategory()}>
      {category}
    </span>
  );
};
