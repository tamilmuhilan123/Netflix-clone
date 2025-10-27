import React, { useEffect, useRef, useState } from 'react';
import titleCards from "../../src/assets/cards/Cards_data";

const TitleCards = (props) => {
  const cardMain = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleWheel = (event) => {
    if (event.deltaY !== 0) {
      event.preventDefault();
      cardMain.current.scrollLeft += event.deltaY;
    }
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - cardMain.current.offsetLeft;
    scrollLeft = cardMain.current.scrollLeft;
    cardMain.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown = false;
    cardMain.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown = false;
    cardMain.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardMain.current.offsetLeft;
    const walk = (x - startX) * 2; 
    cardMain.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    const slider = cardMain.current;
    slider.addEventListener("wheel", handleWheel, { passive: false });
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    slider.style.cursor = "grab";

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDY1NDM0MWYwOGFjNDY4ZDllNzg1YTIwZGM4YWFjYiIsIm5iZiI6MTc1NDg5MzM4OS42MSwic3ViIjoiNjg5OThjNGQzYjJiZTgyNTZiOGVhZmE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zmoUEBKSnex3pTcmRIpHZVA0cGukrGtain9tLkRNHww'
  }
};
const [apiData,setApiData]=useState([])

  return (
    <div className='title'>
      <h2>{props.title}</h2>
      <div className="title-cards-main" ref={cardMain} style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
        {titleCards.map((cards, index) => (
          <div className="titlecard" key={index} style={{ display: "inline-block" }}>
            <img src={cards.image} alt="" />
            {/* <p>{cards.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
