import "./CardAdd.css";
import Card from "react-bootstrap/Card";

interface ICardAddProps {
  ind: number;
  clickHandler: (id: number) => void;
}

export const CardAdd = ({ ind, clickHandler }: ICardAddProps) => {

  return (
    <Card onClick={() => { clickHandler(ind) }} className="addCard">
      <span className="cardPlus"></span>
    </Card>
  );
};
