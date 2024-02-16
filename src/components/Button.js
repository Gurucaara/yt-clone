import React from "react";

const Button = ({ label, searchQuery }) => {
  return (
    <a href={`/results?search_query=${searchQuery}`}>
      <button className=" border border-gray-200 shadow-sm px-6 py-1 bg-white rounded-lg m-2 mt-5 hover:bg-black hover:text-white hover:ring-sky-500 whitespace-nowrap ">
        {label}
      </button>
    </a>
  );
};

export default Button;
