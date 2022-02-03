import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getJoke } from "../../store/actions";
import CategoriesContainer from "../CategoriesContainer";
import { QueryInput } from "../QueryInput/QueryInput";
import RadioButton from "../RadioButton";


export const SearchForm = () => {
  const searchformActiveElem = useSelector(
    (state) => state.searchformActiveElem
  );
  const currentCategory = useSelector((state) => state.currentCategory);
  const searchQuery = useSelector((state) => state.searchQuery);

  const dispatch = useDispatch();
  const requestHandler = (e) => {
    e.preventDefault();
    dispatch(getJoke({ searchformActiveElem, currentCategory, searchQuery }));
  };
  return (
    <form
      className="searchForm"
      onSubmit={requestHandler}
    >
      <RadioButton label={"random"} text={"Random"} checked={true} />
      <RadioButton label={"category"} text={"From categories"} />
      {searchformActiveElem === "category" && <CategoriesContainer />}
      <RadioButton label={"search"} text={"Search"} />
      {searchformActiveElem === "search" && <QueryInput />}
      <button className="searchButton">Get a joke</button>
    </form>
  );
};
