import React from "react";
import VideoListItem from "./video_list_item";

/* props object is argument, 
!! but in class based component, when props passed from parent,
props are available anywhere , !! in any method defined - by "this.props"

so important is, when refactoring function based component to class based
props -> this.props
*/
const VideoList = (props) => {
// const videos = props.videos;

// array.map(function(iterator) {return iterator*2 })
	
	 const VideoItems = props.videos.map((video) => {
		// fun here
		return < VideoListItem video={video} />
	 });


	return (

		<ul className="col-md-4 list-group">
			{ /*{props.videos.length} */}
			{VideoItems}
		</ul> 	

	)

}

export default VideoList;

