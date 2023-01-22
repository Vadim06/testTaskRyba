import React from "react";
import { useState, useEffect, useRef } from "react";
import "./cardAdd.css";
import Card from "react-bootstrap/Card";

interface ICardAddProps {
  ind: number;
  clickHandler: (id: number) => void;
}

export const CardAdd = ({ ind, clickHandler }: ICardAddProps) => {

  return (
    <Card onClick={() => {clickHandler(ind)}} className="addCard" style={{ width: "8rem", height: "8rem", display: "flex" }}>
      <span className="cardPlus"></span>
    </Card>
  );
};
