import React from "react";

// onVideoSelect came from VideoList.
// each VideoListItem has different "video"
const VideoListItem = ({video, onVideoSelect}) => {
	
	// console.log(video);
	
	const imageUrl = video.snippet.thumbnails.medium.url;
	const videoDescription= video.snippet.title;
	
	return (
		// there onVideoSelect fires
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img src={imageUrl} alt="no picture" className="media-object"/>
					<div className="media-body">
						<div className="media-heading">
							{videoDescription}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;

