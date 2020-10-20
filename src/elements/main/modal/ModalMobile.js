import React from "react";
import Menu from "../../menu/Menu";
import style from "./Modal.module.css"


function ModalMobile(props) {
 const { setIsVisable, setFilmData,setFilmIndex, data, filmData, FilmIndex } = props;
const posterUrl = "http://image.tmdb.org/t/p/w200"
const backgroundImage = posterUrl + filmData.poster_path
  return ( <div className={style.mobilePage}>
    
    <div className={style.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    
    <div className={style.modContent}>
          <div className={style.topButtons}>
         <button onClick={() => setIsVisable(false)}>Back</button>
      <button onClick={() => {
        if (FilmIndex <= 18) {
          setFilmIndex(FilmIndex + 1);
          setFilmData(data[FilmIndex + 1])
        }
      }}>Next</button>
      </div>
      
       {/* <div className={style.mobileImg}> */}
        <img className={style.mobileImg} src={posterUrl + filmData.poster_path} alt="movie poster" />
        <div className={style.buttonAddToFavorite}>
      <button>ICON</button>
</div>
     <div className={style.scoreRatingReleasMobile}>
     <div style={{marginTop: "30px"}}> Score: </div><div className={style.textMobile}>{filmData.vote_average}</div>
      <div>Rating: </div><div className={style.textMobile}>{ (filmData.adult === true)? "R" : "Pg"}</div>
      <div>Release Date:</div> <div className={style.textMobile}>{filmData.release_date}</div></div>
       <div className={style.titleFilm}>{filmData.title}</div>
<div className={style.descriptionFilm}>{filmData.overview}</div>

    </div>
    
    </div>

    )
}
  



export default ModalMobile;