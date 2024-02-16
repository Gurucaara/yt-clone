import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLike, AiOutlineSetting } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";

import { BsPlayBtn } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { FcFeedback, FcManager } from "react-icons/fc";
import { VscReport } from "react-icons/vsc";

const Sidebar = () => {
  // Use useSelector to subscribe to the store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // This is known as Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-64 bg-white">
      <div className="mb-6">
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <AiOutlineHome className="mr-3 text-xl" />
          Home
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <BsPlayBtn className="mr-3 text-xl" />
          Shorts
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <MdOutlineSubscriptions className="mr-3 text-xl" />
          Subscriptions
        </Link>
      </div>
      <hr className="my-2"></hr>
      <div className="mb-6">
        <p className="text-gray-500 text-sm ml-4 mb-2">Library</p>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <MdOutlineVideoLibrary className="mr-3 text-xl" />
          History
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <GoVideo className="mr-3 text-xl" />
          Your Videos
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover-bg-gray-100">
          <MdOutlineWatchLater className="mr-3 text-xl" />
          Watch Later
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover-bg-gray-100">
          <AiOutlineLike className="mr-3 text-xl" />
          Liked Videos
        </Link>
      </div>
      <hr className="my-2"></hr>
      <div className="mb-6">
        <p className="text-gray-500 text-sm ml-4 mb-2">Subscriptions</p>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <FcManager className="mr-3 text-xl" />
          Puru Rana
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <FaCircleUser className="mr-3 text-xl" />
          Skrillex
        </Link>
      </div>
      <hr className="my-2"></hr>
      <div className="mb-6">
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <AiOutlineSetting className="mr-3 text-xl" />
          Settings
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <VscReport className="mr-3 text-xl" />
          Report History
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <BiHelpCircle className="mr-3 text-xl" />
          Help
        </Link>
        <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-100">
          <FcFeedback className="mr-3 text-xl" />
          Send Feedback
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
