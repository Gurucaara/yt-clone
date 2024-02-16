import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  // Getting cache from the store
  const searchCache = useSelector((store) => store.search);

  /** How my cache will be
   * searchCache = {
   *   "iphone" : ["iphone 12", "iphone 13", "iphone 14", "iphone 15"]
   * }
   * searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="bg-white p-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            alt="menu"
            onClick={() => toggleMenuHandler()}
            className="h-8 mr-4 cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
            src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=avif&w=256"
          />
          <a href="/">
            <img
              alt="logo"
              className="h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <div>
            <input
              className="w-[30rem] border border-gray-300 px-5 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-400"
              type="text"
              placeholder="🔍   Search"
              // Binding it with a state searchQuery
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-full hover:bg-red-700 transition-colors duration-300 ease-in-out">
              Search
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[30rem]  rounded-lg border-white ">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            alt="user"
            className="h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
