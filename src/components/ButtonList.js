import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "./Button";

const buttonData = [
  { label: "All", searchQuery: "" },
  { label: "Games", searchQuery: "Games" },
  { label: "Music", searchQuery: "Music" },
  { label: "Live", searchQuery: "Live" },
  { label: "Comedy", searchQuery: "Comedy" },
  { label: "Movies", searchQuery: "Movies" },
  { label: "Gadgets", searchQuery: "Gadgets" },
  { label: "News", searchQuery: "News" },
  { label: "Musicals", searchQuery: "Musicals" },
  { label: "Trending", searchQuery: "Trending" },
  { label: "Drama", searchQuery: "Drama" },
  { label: "Theater", searchQuery: "Theater" },
  { label: "Cinema", searchQuery: "Cinema" },
  { label: "Reality Shows", searchQuery: "Reality+Shows" },
  { label: "Motivation", searchQuery: "Motivation" },
  { label: "Hip-Hop", searchQuery: "Hip-Hop" },
  { label: "Technology", searchQuery: "Technology" },
  { label: "Recently uploaded", searchQuery: "Recently+uploaded" },
];

const ButtonList = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="grid grid-flow-col bg-white">
      <MdChevronLeft
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideLeft}
        aria-hidden="true"
      />
      <div
        id="slider"
        className="flex h-18 m-2 overflow-hidden whitespace-nowrap scroll-smooth"
      >
        {buttonData.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            searchQuery={button.searchQuery}
          />
        ))}
      </div>
      <MdChevronRight
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideRight}
        aria-hidden="true"
      />
    </div>
  );
};

export default ButtonList;
