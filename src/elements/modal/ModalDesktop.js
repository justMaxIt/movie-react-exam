import React from "react";
import Menu from "../menu/Menu";
import style from "./Modal.module.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import darkWeb from "./../../img/darkWeb.jpg";
import noPoster from "./../../img/noPoster.png";

function ModalDesktop(props) {
  const posterUrl = "http://image.tmdb.org/t/p/w200";
  const {
    setIsVisable,
    setFilmData,
    setFilmIndex,
    setActivePage,
    setPage,
    data,
    filmData,
    filmIndex,
    page,
    activePage,
    favFilmArr,
  } = props.state;
  const { setCondition, year, date } = props;

  const addedFilm = favFilmArr.find((el) => filmData?.id === el.id);
  const cond =
    data.results?.[data.results.length - 1].id === filmData.id &&
    activePage === data.total_pages;

  return (
    <div>
      <Menu />
      {filmData.poster_path ? (
        <div
          className={style.backgroundImage}
          style={{
            backgroundImage: `url(${posterUrl + filmData.poster_path})`,
          }}
        ></div>
      ) : (
        <div
          className={style.backgroundImage}
          style={{ backgroundImage: `url(${darkWeb})` }}
        ></div>
      )}
      <div className={style.modContent}>
        <div className={style.topButtons}>
          <button
            onClick={() => {
              if (filmIndex === 19 && activePage !== data.total_pages) {
                setPage(page - 1);
                setIsVisable(false);
              } else {
                setIsVisable(false);
              }
            }}
          >
            <div className={style.topButtonsButInside}>
              <AiOutlineLeftCircle />
              Back to list
            </div>
          </button>
          {!cond ? (
            <button
              onClick={(e) => {
                if (filmIndex <= 18) {
                  setFilmIndex(filmIndex + 1);
                  setFilmData(data.results[filmIndex + 1]);
                }
                if (filmIndex === 18 && activePage !== data.total_pages) {
                  setPage(page + 1);
                }
                if (filmIndex === 19) {
                  setFilmIndex(0);
                  setFilmData(data.results[0]);
                  setActivePage(activePage + 1);
                }
              }}
            >
              <div className={style.topButtonsButInside}>
                Next Movie
                <AiOutlineRightCircle />
              </div>
            </button>
          ) : null}
        </div>
        <div className={style.insideContent}>
          {filmData.poster_path ? (
            <div className={style.imgModal}>
              <img src={posterUrl + filmData.poster_path} alt="movie poster" />
            </div>
          ) : (
            <div className={style.imgModal}>
              <img src={noPoster} alt="img" />
            </div>
          )}

          <div className={style.insideFilmContent}>
            {addedFilm === undefined ? (
              <div className={style.buttonAddToFavorite}>
                <button
                  onClick={() => {
                    setCondition(true);
                  }}
                >
                  Add to favorite
                </button>
              </div>
            ) : null}

            <div className={style.titleFilm}>
              {filmData.title + ` (${year})`}
            </div>
            <div className={style.scoreRatingRelease}>
              <div>Score: {filmData.vote_average}</div>
              <div className={style.rating}>
                Rating: {filmData.adult === true ? "R" : "Pg"}
              </div>
              <div>Release Date: {date}</div>
            </div>
            <div className={style.descriptionFilm}>{filmData.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDesktop;
