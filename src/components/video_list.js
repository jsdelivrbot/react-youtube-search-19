
/* props object is argument, 
!! but in class based component, when props passed from parent,
props are available anywhere , !! in any method defined - by "this.props"

so important is, when refactoring function based component to class based
props -> this.props
*/
import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
// const videos = props.videos;
// array.map(function(iterator) {return iterator-make-smth })
	 const VideoItems = props.videos.map((video) => {
		// fun here
		return (
			<div>
				<VideoListItem 
					// function, came from App
					onVideoSelect={props.onVideoSelect}
					
					//just for nothing 
					key={video.etag} 
					
					// video - separate video item, iterator. 
					// needed to pass to video_list_item.js as a property
					video={video} 
				/>
			</div>
		);
	 });
	
	return (

		<ul className="col-md-4 list-group">
			{ /*{props.videos.length} */}
			{VideoItems}
		</ul> 	

	);
};


export default VideoList;

