import React from "react";

const VideoListItem = (props) => {
	return (
		<div>
			<li>{props.video.snippet.title}</li>
		</div>
	)
}

export default VideoListItem;

