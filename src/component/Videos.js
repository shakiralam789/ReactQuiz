import classes from "../style/videos.module.css";
import Video from "./Video";
import useVideoList from "../hooks/useVideoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
  let [page, setPage] = useState(1); // Initialize with 1 instead of 0
  let { error, loading, videos, hasMore } = useVideoList(page);
  

  return (
    <div className={classes.videos}>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage((prevPage) => prevPage + 8)} // Use previous page value
          className={classes.videos}
        >
          {videos.map((video, inx) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}

      {videos.length === 0 && !loading && <div>no video found</div>}

      {error && <div>Internal error. Sorry for that</div>}
    </div>
  );
}
