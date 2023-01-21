import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { GalleryItem } from './GalleryItem';
import icons from '../../assets/icons.json';

function Gallery() {
  const [filteredData, setFilteredData] = useState(icons);
  const [inputValue, setInputValue] = useState<string>('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue(inputValue.toLowerCase());
      setFilteredData(icons.filter((item) => {
        if (inputValue === '') {
          return item;
        } else {
          if (inputValue) {
            return item.name.toLowerCase().includes(inputValue)
          }
        }
      }))
    } else {
      setFilteredData(icons);
    }
  } // filtering

  // filteredData.map((item, id) => {
  //   if (Number(item.id) === id) {
  //     return (
  //       <div></div>
  //     )
  //   } else {
  //     for (let i = 0 + inc; i < icons.length; i++) {
  //       if (Number(item.id) === id + i) {
  //         inc = i;
  //         return (
  //           <div></div>
  //         )
  //       }
  //     }
  //   }
  // })
  let inc = 0;

  return (
    <>
      <header>
        <form onSubmit={(e) => { submitHandler(e) }}>
          <input className='searchBar' type="text" placeholder='hledat' onChange={(e) => { setInputValue(e.currentTarget.value) }} />
        </form>
      </header>
      <div className='gallery'>
        {filteredData.map((item, id) => {
          console.log('item.id ', Number(item.id), 'id ', id, "inc ", inc);

          if (Number(item.id) === id + inc) {
            return (
              <div key={id} id={item.id} className='galleryItem'>
                <GalleryItem item={item} elementId={Number(item.id)} />
              </div>
            )
          } else {
            console.log(' else ');
            for (let i = 0 + inc; i < icons.length; i++) {
              if (Number(item.id) === id + i) {
                inc += i;
                console.log('render in else ');
                return (
                  <div key={id} id={item.id} className='galleryItem'>
                    <GalleryItem item={item} elementId={Number(item.id)} />
                  </div>
                )
              }
            }
          }
        }
        )}
      </div>
    </>
  );
}

export default Gallery;
