import React from "react";
import ModalDesktop from "./ModalDesktop";
import ModalMobile from "./ModalMobile";
import style from "./Modal.module.css"
import { useState } from "react";


  
export const useViewport = () => {
const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };}



const Modal = (props) => {
  // const { setIsVisable, setFilmData, setFilmIndex, setActivePage, setPage, data, page, activePage, filmData, filmIndex} = props;
  const { width } = useViewport();
  const breakpoint = 620;

const [favFilmArr, setFavFilmArr] = useState([])
 
  return (<div>
    <div className={style.backgroundImageBlur}></div>
    <div className={style.modCont}>
     
    {width < breakpoint ?
      <ModalMobile
        //  setIsVisable={props.setIsVisable}
        // setFilmData={props.setFilmData}
        //   setFilmIndex={props.setFilmIndex}
        //   setActivePage={props.setActivePage}
        //   setPage={props.setPage}
        //   data={props.data}
        //   page={props.page}
        //   activePage={props.activePage}
        // filmIndex={props.filmIndex}
        // filmData={props.filmData}
          props={props.props}
          setFavFilmArr={setFavFilmArr}
          favFilmArr={favFilmArr}

  
      /> :
      <ModalDesktop
        // setIsVisable={props.setIsVisable}
        // setFilmData={props.setFilmData}
        //   setFilmIndex={props.setFilmIndex}
        //   setActivePage={props.setActivePage}
        //   setPage={props.setPage}
        //   data={props.data}
        //   page={props.page}
        //   activePage={props.activePage}
        // filmIndex={props.filmIndex}
        //   filmData={props.filmData}
          props={props.props}
             setFavFilmArr={setFavFilmArr}
          favFilmArr={favFilmArr}

             />}
  </div></div>
   );
}

export default Modal;