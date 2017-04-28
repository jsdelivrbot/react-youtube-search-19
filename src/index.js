import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyARgS2afrIcW6hMmksoH-iMqKjRK8dn0b4'; 


class App extends Component {
	
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		
		this.videoSearch('dio');
	}

	videoSearch(term){
		YTSearch({ key: API_KEY, term: term}, (videos) => {
				this.setState({ 
					videos: videos, 
					selectedVideo: videos[0]
				});
				// console.log(this.state.videos);
			}
		);
	}

	render(){
		
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

		return (
			<div>
				< SearchBar onSearchTermChange={videoSearch} />
				< VideoDetail video={this.state.selectedVideo}/>
				< VideoList 
					// one purpose - update the state with selected video
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}	

ReactDOM.render(<App />, document.querySelector('.container')); 