import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { CardAdd } from "./components/cardAdd/CardAdd";
import { CardImg } from "./components/cardImg/CardImg";
import { Gallery } from "./components/gallery/Gallery";

const cardIcon = [{
  "cardIcon": ``,
  "dataIcon": 0
}, {
  "cardIcon": ``,
  "dataIcon": 0
}, {
  "cardIcon": ``,
  "dataIcon": 0
}, {
  "cardIcon": ``,
  "dataIcon": 0
}];

export const App = () => {
  const [changingInd, setChangingInd] = useState(0)
  const [showGallery, setShowGallery] = useState(false);

  const chosenIcon = (path: string, elementId: number) => {
    setShowGallery(false);
    const obj = {
      "cardIcon": path,
      "dataIcon": elementId
    };
    cardIcon[changingInd] = obj;
  }

  const clickHandler = (ind: number) => {
    setShowGallery(true);
    setChangingInd(ind);
  }

  const deleteHandler = () => {
    const obj = {
      "cardIcon": ``,
      "dataIcon": 0
    };
    cardIcon[changingInd] = obj;
    setShowGallery(false);
  }

  return (
    <div className="addCardsContainer">
      {showGallery ?
        <Gallery deleteFunc={deleteHandler} chosenIcon={chosenIcon} />
        : cardIcon.map((icon, i) => {
          if (icon.cardIcon === ``) {
            return <div key={i}> <CardAdd ind={i} clickHandler={clickHandler} /> </div>;
          } else {
            return <div key={i}><CardImg ind={i} dataIcon={icon.dataIcon} fileName={icon.cardIcon} clickHandler={clickHandler} /> </div>
          }
        })}
    </div>
  );
}