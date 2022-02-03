import MainBlock from "./components/MainBlock";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./store/actions";
import { FavoritesContainer } from "./components/FavoritesContainer/FavoritesContainer";
import { FavoriteSwitch } from "./components/FavoriteSwitch/FavoriteSwitch";


function App() {
  const dispatch = useDispatch();
  const favorites = useSelector(state=>state.favorites)
  useEffect(() => {
    dispatch(getCategories());
  });
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
  },[favorites])

  return (
    <div className="mainPage">
      <FavoriteSwitch/>
      <MainBlock />
      <FavoritesContainer/>
    </div>

  );
}

export default App;
