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

		YTSearch({ key: API_KEY, term:'iphone6'}, (videos) => {
				this.setState({ 
					videos: videos, 
					selectedVideo: videos[2]
				});
				// console.log(this.state.videos);

			}
		); 
	}

	render(){
		return (
			<div>
				< SearchBar />
				< VideoDetail video={this.state.selectedVideo}/>
				< VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}	

ReactDOM.render(<App />, document.querySelector('.container')); 