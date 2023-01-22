import React, { ChangeEvent } from "react";
import { useState } from "react";
import "./Gallery.css";
import { GalleryItem } from "./GalleryItem";
import icons from "../../assets/icons.json";
import Form from 'react-bootstrap/Form'

interface IGalleryProps {
  chosenIcon: (path: string, elementId: number) => void;
  deleteFunc: () => void;
}

export const Gallery = ({ chosenIcon, deleteFunc }: IGalleryProps) => {
  const [filteredData, setFilteredData] = useState(icons);
  const [inputValue, setInputValue] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue(inputValue.toLowerCase());
      setFilteredData(
        icons.filter((item) => {
          if (inputValue === "") {
            return item;
          } else {
            if (inputValue) {
              return item.name.toLowerCase().includes(inputValue);
            }
          }
        })
      );
    } else {
      setFilteredData(icons);
    }
  };
  const upFunc = (path: string, elementId: number) => {
    chosenIcon(path, elementId);
  }
  const setFilters = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'energie') {
      setFilteredData(
        icons.filter((item) => {
          return item.name.toLowerCase().includes(e.currentTarget.value);
        })
      );
    } else if (e.currentTarget.value === 'all') {
      setFilteredData(icons);
    }
  }

  return (
    <div className="galleryContainer">
      <header>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="searchBar"
            type="text"
            placeholder="hledat"
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
          />
        </form>
        <p className="delete" onClick={() => { deleteFunc() }}>smazat</p>
      </header>
      <Form.Select onChange={(e) => { setFilters(e) }} className="select" aria-label="Default select example">
        <option disabled={true}> filtrovat</option>
        <option value="all">Vše</option>
        <option value="energie">Energie</option>
      </Form.Select>
      <div className="gallery">
        {filteredData.map((item) => {
          return (
            <GalleryItem
              key={item.id}
              item={item}
              elementId={Number(item.id)}
              chosenIcon={upFunc}
            />
          );
        })}
      </div>
    </div>
  );
};
