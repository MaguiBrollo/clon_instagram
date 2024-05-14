import React, { useEffect, useRef, useState } from "react";
//import { data } from "./assets/data";
import {Historia } from '../Historia/Historia'
import { historias } from "../../utils/Constantes";
import './Carrusel.css'


export const Carrusel = () => {

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li > Historia")[currentIndex];

       console.log("use efect");
      if (imgNode) {
         imgNode.scrollIntoView({
            behavior: "smooth",
         });
      }
   }, [currentIndex]);

   const scrollToImage = (direction) => {
      if (direction === "prev") {
         setCurrentIndex((curr) => {
            console.log("prev")
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
         });
      } else {
         console.log("ant");
         const isLastSlide = currentIndex === historias.length - 1;
         if (!isLastSlide) {
            setCurrentIndex((curr) => curr + 1);
         }
      }
   };

	/* 	const goToSlide = (slideIndex) => {
			setCurrentIndex(slideIndex);
		}; */

		return (
			<div className="main-container">
				<div className="slider-container">
					<div className="leftArrow" onClick={() => scrollToImage("prev")}>
						&#10092;
					</div>
					<div className="rightArrow" onClick={() => scrollToImage("next")}>
						&#10093;
					</div>
					<div className="container-images">
						<ul ref={listRef}>
							{historias.map((hist) => {
								return (
									<li key={hist.id}>
										<Historia historia={hist} />
									</li>
								);
							})}
						</ul>
					</div>
					{/* <div className="dots-container">
						{historias.map((_, idx) => (
							<div
								key={idx}
								className={`dot-container-item ${
									idx === currentIndex ? "active" : ""
								}`}
								onClick={() => goToSlide(idx)}
							>
								&#9865;
							</div>
						))}
					</div> */}
				</div>
			</div>
		);
}
