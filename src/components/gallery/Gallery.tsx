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
  const [localSearch, setLocalSearch] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.target.value.toLowerCase();
    if (localSearch !== "") {
      currentValue = localSearch + " " + e.target.value.toLowerCase()
    }
    setFilteredData(
      icons.filter((item) => {
        if (currentValue === "") {
          return item;
        } else {
          if (currentValue) {
            return item.name.toLowerCase().includes(currentValue);
          }
        }
      })
    );
  };
  const upFunc = (path: string, elementId: number) => {
    chosenIcon(path, elementId);
  }
  const setFilters = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'energie') {
      setLocalSearch('energie');
      setFilteredData(
        icons.filter((item) => {
          return item.name.toLowerCase().includes(e.currentTarget.value);
        })
      );
    } else if (e.currentTarget.value === 'all') {
      setLocalSearch("");
      setFilteredData(icons);
    }
  }

  return (
    <div className="galleryContainer">
      <header>
        <form>
          <input
            className="searchBar"
            type="text"
            placeholder="hledat"
            onChange={changeHandler}
          />
        </form>
        <p className="delete" onClick={() => { deleteFunc() }}>smazat</p>
      </header>
      <Form.Select onChange={(e) => { setFilters(e) }} className="select">
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
