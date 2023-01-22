import Card from "react-bootstrap/Card";

interface ICardImgProps {
  fileName: string;
  clickHandler: (id: number) => void;
  ind: number;
  dataIcon: number;
}

export const CardImg = ({ ind, fileName, clickHandler, dataIcon }: ICardImgProps) => {
  const encodedUrl = encodeURI(
    `https://eletak.oresi.cz/files/Icons/CZ/${fileName}`
  );

  return (
    <div>
      <Card onClick={() => { clickHandler(ind) }} className="addCard">
        <Card.Img data-icon={dataIcon} src={encodedUrl} />
      </Card>
    </div>
  );
};
