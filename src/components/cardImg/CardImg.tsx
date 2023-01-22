import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CardImg.css";
import Card from "react-bootstrap/Card";

interface ICardImgProps {
  fileName: string;
  clickHandler: (id: number) => void;
  ind: number;
}

export const CardImg = ({ ind, fileName, clickHandler }: ICardImgProps) => {

  const encodedUrl = encodeURI(
    `https://eletak.oresi.cz/files/Icons/CZ/${fileName}`
  );
  return (
    <Card onClick={() => {clickHandler(ind)}} className="addCard" style={{ width: "8rem", height: "8rem" }}>
      <Card.Img src={encodedUrl} />
    </Card>
  );
};
