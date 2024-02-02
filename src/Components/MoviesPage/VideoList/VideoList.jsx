import { useEffect } from "react";
import "./VideoList.scss";
import { useSelector } from "react-redux";

const VideoList = () => {
  const { fetchedVideos } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(fetchedVideos);
  }, [fetchedVideos]);

  return <h1>VideoList</h1>;
};

export default VideoList;
