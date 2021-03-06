import React from "react";
import style from "./../modal/Modal.module.css";
import { useViewport } from "./../modal/Modal";
import Menu from "../menu/Menu";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import darkWeb from "./../../img/darkWeb.jpg";
import noPoster from "./../../img/noPoster.png";

const posterUrl = "http://image.tmdb.org/t/p/w200";

const ModalFav = (props) => {
  const {
    setOpenFavModal,
    setFilmFavData,
    setFilmFavInd,
    favFilmArr,
    filmFavData,
    filmFavInd,
  } = props.state;
  const { width } = useViewport();
  const breakpoint = 620;
  const showNextBut = favFilmArr?.[favFilmArr.length - 1].id !== filmFavData.id;
  const newDate = new Date(Date.parse(filmFavData.release_date));
  const year = newDate.getFullYear();
  function convertDate(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Jule",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    );
  }

  return (
    <div>
      {width < breakpoint ? (
        <div>
          {filmFavData.poster_path ? (
            <div
              className={style.backgroundImage}
              style={{
                backgroundImage: `url(${posterUrl + filmFavData.poster_path})`,
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
                  setOpenFavModal(false);
                  setFilmFavData(null);
                }}
              >
                <div className={style.topButtonsButInside}>
                  <FaChevronLeft />
                  Back
                </div>
              </button>
              {showNextBut ? (
                <button
                  onClick={() => {
                    setFilmFavInd(filmFavInd + 1);
                    setFilmFavData(favFilmArr[filmFavInd + 1]);
                  }}
                >
                  <div className={style.topButtonsButInside}>
                    Next
                    <FaChevronRight />
                  </div>
                </button>
              ) : null}
            </div>
            <div className={style.insideContent}>
              {filmFavData.poster_path ? (
                <div className={style.imgModal}>
                  <img
                    src={posterUrl + filmFavData.poster_path}
                    alt="movie poster"
                  />
                </div>
              ) : (
                <div className={style.imgModal}>
                  <img src={noPoster} alt="img" />
                </div>
              )}
              <div className={style.scoreRatingRelease}>
                <div> Score: </div>
                <div className={style.textMobile}>
                  {filmFavData.vote_average}
                </div>
                <div>Rating: </div>
                <div className={style.textMobile}>
                  {filmFavData.adult === true ? "R" : "Pg"}
                </div>
                <div>Release Date:</div>{" "}
                <div className={style.textMobile}>{convertDate(newDate)}</div>
              </div>
              <div className={style.titleFilm}>
                {filmFavData.title + ` (${year})`}
              </div>
              <div className={style.descriptionFilm}>
                {filmFavData.overview}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Menu />
          {filmFavData.poster_path ? (
            <div
              className={style.backgroundImage}
              style={{
                backgroundImage: `url(${posterUrl + filmFavData.poster_path})`,
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
                  setOpenFavModal(false);
                  setFilmFavData(null);
                }}
              >
                <div className={style.topButtonsButInside}>
                  <AiOutlineLeftCircle />
                  Back to list
                </div>
              </button>
              {showNextBut ? (
                <button
                  onClick={() => {
                    setFilmFavInd(filmFavInd + 1);
                    setFilmFavData(favFilmArr[filmFavInd + 1]);
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
              {filmFavData.poster_path ? (
                <div className={style.imgModal}>
                  <img
                    src={posterUrl + filmFavData.poster_path}
                    alt="movie poster"
                  />
                </div>
              ) : (
                <div className={style.imgModal}>
                  <img src={noPoster} alt="img" />
                </div>
              )}
              <div className={style.insideFilmContent}>
                <div className={style.titleFilm}>
                  {filmFavData.title + ` (${year})`}
                </div>
                <div className={style.scoreRatingRelease}>
                  <div>Score: {filmFavData.vote_average}</div>
                  <div className={style.rating}>
                    Rating: {filmFavData.adult === true ? "R" : "Pg"}
                  </div>
                  <div>Release Date: {convertDate(newDate)}</div>
                </div>
                <div className={style.descriptionFilm}>
                  {filmFavData.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFav;
