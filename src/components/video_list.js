import React from 'react';
import VideoListItem from "./video_list_item"

const VideoList = (props) => {
  const videoLists = props.videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoClick={props.onVideoClick}
      />
    )
  })

  return(
    <ul className="col-md-4 list-group">
      {videoLists}
    </ul>
  )
}

export default VideoList;
