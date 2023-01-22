import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CardImg.css";
import Card from "react-bootstrap/Card";

interface ICardImgProps {
  fileName: string;
}

export const CardImg = ({ fileName }: ICardImgProps) => {

  const encodedUrl = encodeURI(
    `https://eletak.oresi.cz/files/Icons/CZ/${fileName}`
  );
  return (
    <Card className="addCard" style={{ width: "8rem", height: "8rem" }}>
      <Card.Img src={encodedUrl} />
    </Card>
  );
};
