import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyARgS2afrIcW6hMmksoH-iMqKjRK8dn0b4'; 


class App extends Component {
	
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term:'iphone6'}, (data) => {
				this.setState({ videos: data })
				console.log(this.state.videos);

			}
		); 
	}

	render(){
		return (
			<div>
				< SearchBar/>
			</div>
		);
	}
}	

ReactDOM.render(<App />, document.querySelector('.container')); 