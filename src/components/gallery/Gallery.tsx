import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { GalleryItem } from "./GalleryItem";
import icons from "../../assets/icons.json";

interface IGalleryProps {
  chosenIcon: (path:string) => void;
}

export const Gallery = ({ chosenIcon }: IGalleryProps) => {
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
  const upFunc = (path: string) => {
    chosenIcon(path);
  }

  return (
    <>
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
      </header>
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
    </>
  );
};
