import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import styles from "./JokesElem.module.css";
export const JokesElem = ({ categories, updated_at, id, url, value,isFavoriteElem }) => {
  function timeDiffCalc(datePast) {
    const date1 = new Date(datePast);
    const date2 = new Date();

    const diffTime = Math.abs(date2 - date1);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return diffHours;
  }

  return (
    <div className={isFavoriteElem?styles.jokeContainerFavorite : styles.jokeContainer}>
      <div>
        <div className="favoriteButtonContainer">
          <FavoriteButton
            categories={categories}
            updated_at={updated_at}
            id={id}
            url={url}
            value={value}
            
          />
        </div>

        <div className={styles.jokeContainer_info}>
          <div className={styles.jokeIcon}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill={isFavoriteElem?"#F8F8F8":"none"} />
              <path
                d="M27.2504 11H12.7496C11.2335 11 10 12.2333 10 13.7496V22.6238C10 24.1367 11.2281 25.368 12.7399 25.3734V29.4004L18.5271 25.3734H27.2504C28.7665 25.3734 30 24.1399 30 22.6238V13.7496C30 12.2333 28.7665 11 27.2504 11ZM28.8281 22.6238C28.8281 23.4937 28.1204 24.2015 27.2504 24.2015H18.1594L13.9117 27.1573V24.2015H12.7496C11.8796 24.2015 11.1719 23.4937 11.1719 22.6238V13.7496C11.1719 12.8795 11.8796 12.1719 12.7496 12.1719H27.2504C28.1204 12.1719 28.8281 12.8795 28.8281 13.7496V22.6238Z"
                fill="#ABABAB"
              />
              <path
                d="M15.3529 15.1407H24.6471V16.3126H15.3529V15.1407Z"
                fill="#ABABAB"
              />
              <path
                d="M15.3529 17.6407H24.6471V18.8126H15.3529V17.6407Z"
                fill="#ABABAB"
              />
              <path
                d="M15.3529 20.1407H24.6471V21.3126H15.3529V20.1407Z"
                fill="#ABABAB"
              />
            </svg>
          </div>

          <div className={styles.jokeContainer_text}>
            <div className={styles.jokeContainer_linkContainer}>
              <span>ID:</span>
              <a href={url}>{id}</a>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.54539 0H5.90903C5.65799 0 5.45448 0.203515 5.45448 0.45455C5.45448 0.705585 5.65799 0.9091 5.90903 0.9091H8.44803L3.76946 5.58768C3.59198 5.76516 3.59198 6.05298 3.76946 6.2305C3.85819 6.31923 3.97452 6.36362 4.09085 6.36362C4.20718 6.36362 4.32352 6.31923 4.41223 6.23048L9.09086 1.55191V4.09091C9.09086 4.34194 9.29437 4.54546 9.54541 4.54546C9.79644 4.54546 9.99996 4.34194 9.99996 4.09091V0.45455C9.99994 0.203515 9.79642 0 9.54539 0Z"
                  fill="#8EA7FF"
                />
                <path
                  d="M7.72725 4.54543C7.47622 4.54543 7.2727 4.74894 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02166 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74894 7.97829 4.54543 7.72725 4.54543Z"
                  fill="#8EA7FF"
                />
              </svg>
            </div>
            <p className={isFavoriteElem?styles.jokeContainerFavorite_p : styles.jokeContainer_p}>{value}</p>
            <div className={styles.jokeContainer_footer}>
              <span>Last update: {timeDiffCalc(updated_at)} hours ago </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
