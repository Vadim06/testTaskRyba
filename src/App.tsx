import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { CardAdd } from "./components/cardAdd/CardAdd";
import { CardImg } from "./components/cardImg/CardImg";
import { Gallery } from "./components/gallery/Gallery";

const cards = [0, 1, 2, 3];
const cardIcon = [``, ``, ``, ``];
export const App = () => {
  const [icon1, setIcon1] = useState();
  const [icon2, setIcon2] = useState();
  const [icon3, setIcon3] = useState();
  const [icon4, setIcon4] = useState();
  const [showGallery, setShowGallery] = useState(false);

  const chosenIcon = (path: string) => {
    console.log(path);
  }

  const clickHandler = (ind: number) => {
    console.log(ind);
  }

  return (
    <div className="addCardsContainer">
      {showGallery ?
        <Gallery chosenIcon={chosenIcon} />
        : cardIcon.map((icon, i) => {
          if (icon === ``) {
            return <div key={i}> <CardAdd ind={i} clickHandler={clickHandler} /> </div>;
          } else {
            return <div key={i}><CardImg fileName={icon} /> </div>
          }
        })}
    </div>
  );
}
/*

    <Gallery chosenIcon={chosenIcon} />
*/