import React from 'react';
import icons from '../../assets/icons.json'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

interface IGalleryItemProps {
  "item": { "id": string, "name": string, "filename": string, "parent": string, "editor": string };
  elementId: number;
}

export const GalleryItem = ({ item, elementId }: IGalleryItemProps) => {
  return (
    <>
      <div className='card'>
        <Card style={{ width: '6rem', minHeight: '8.5rem' }}>
          <Card.Img src={`https://eletak.oresi.cz/files/Icons/CZ/${icons[elementId]?.filename}`} />
          <Card.Text className='cardText'>{item.name}</Card.Text>
        </Card>
      </div>
    </>
  );
}
