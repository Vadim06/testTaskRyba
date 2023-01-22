import React from "react";
import Card from "react-bootstrap/Card";

interface IGalleryItemProps {
  item: {
    id: string;
    name: string;
    filename: string;
    parent: string;
    editor: string;
  };
  elementId: number;
  chosenIcon: (path: string) => void;
}

export const GalleryItem = ({ item, elementId, chosenIcon }: IGalleryItemProps) => {
  const encodedUrl = encodeURI(
    `https://eletak.oresi.cz/files/Icons/CZ/${item.filename}`
  );
  const upFunc = () => {
    chosenIcon(item.filename);
  }

  return (
    <>
      <div className="card">
        <Card onClick={upFunc} style={{ width: "6rem", minHeight: "8.5rem" }}>
          <Card.Img src={encodedUrl} />
          <Card.Text className="cardText">{item.name}</Card.Text>
        </Card>
      </div>
    </>
  );
};
