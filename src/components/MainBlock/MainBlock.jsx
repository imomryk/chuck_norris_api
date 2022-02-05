import { useSelector } from "react-redux";
import { useWindowSize } from "../../customHooks";
import Header from "../Header";
import Intro from "../Intro";
import { JokesContainer } from "../JokesContainer/JokesContainer";
import { SearchForm } from "../SearchForm/SearchForm";

import styles from './MainBlock.module.css'

export const MainBlock = () => {
  const openFavorites = useSelector(state=>state.openFavorites)
  const size = useWindowSize()
  return (
    <div className={openFavorites&&size.width<=380?styles.mainBlockClosed:styles.mainBlock}>
      <div className={openFavorites?styles.mainBlock_filter:null}></div>
      <div className={openFavorites?`${styles.mainBlock_container} ${styles.mainBlock_container_blocked}`:styles.mainBlock_container}>
        
        <Header />
        <Intro />
        <SearchForm />
        <JokesContainer />
      </div>
    </div>
  );
};
