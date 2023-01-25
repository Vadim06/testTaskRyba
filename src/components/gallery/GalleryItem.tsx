import Card from "react-bootstrap/Card";
import "./GalleryItem.css";

interface IGalleryItemProps {
  item: {
    id: string;
    name: string;
    filename: string;
    parent: string;
    editor: string;
  };
  elementId: number;
  chosenIcon: (path: string, elementId: number) => void;
}

export const GalleryItem = ({ item, elementId, chosenIcon }: IGalleryItemProps) => {
  const encodedUrl = encodeURI(
    `https://eletak.oresi.cz/files/Icons/CZ/${item.filename}`
  );
  const upFunc = () => {
    chosenIcon(item.filename, elementId);
  }

  return (
    <Card className="galleryItemCard" onClick={upFunc}>
      <Card.Img src={encodedUrl} />
      <Card.Text className="cardText">{item.name}</Card.Text>
    </Card>
  );
};
