import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyARgS2afrIcW6hMmksoH-iMqKjRK8dn0b4'; 
YTSearch({
	key: API_KEY,
	term:'iphone6'}, function (data) {
		console.log(data);
	}
);



const App = () => {
	return (
		<div>
			< SearchBar/>
		</div>
		)
}

ReactDOM.render(<App />, document.querySelector('.container')); 