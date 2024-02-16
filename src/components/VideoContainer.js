import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    setLoading(false); // Mark loading as false once data is loaded
  };

  return (
    <div className="flex flex-wrap overflow-y-auto h-screen">
      {loading
        ? // Map 50 VideoShimmer cards when loading is true
          Array.from({ length: 50 }).map((_, index) => (
            <VideoShimmer key={index} />
          ))
        : // Render video cards when loading is false
          videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
