import React from "react";

const VideoListItem = ({video}) => {
/*
({video}) === const video = props.video;	
this props object has a property "video". 
take it as param
make a new variable called that name (video) - es6 feature
*/		
	
	console.log(video);
	
	const imageUrl = video.snippet.thumbnails.medium.url;
	const videoDescription= video.snippet.title;
	
	return (
		<li className="list-group-item">
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

