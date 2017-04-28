// import React.Component into variable Component
// like const Component = React.Component
import React, { Component } from "react";


/* 
handling events: 2 steps
- crafting event handler
- attaching event handler to component
*/

class SearchBar extends Component {	
	
	// initial steps:
	constructor(props) {
		// call parent
		super(props);

		// initial state
		this.state = { term: ''};
	}

	// every React.Component has mandatory render method. not just object
	// must return some jsx, otherwise will be an error
	// ## need more info abour React events (onChange ...)
	render() {
		// return <input onChange={this.onInputChange} />
		// return <input onChange={(event) => console.log(event.target.value)} />
		
		/*
		input changes-> it change the state ->
		*/ 

		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					// onChange={(event) => this.setState({term: event.target.value})} 
					onChange={(event) => this.onInputChange(event.target.value)} 
				/>
			</div>
		);

	}

	// this is it
	onInputChange(term) {
		this.setState({term});
		//props goes to index.js to App.render() 
		this.props.onSearchTermChange(term);		
	}

}


export default SearchBar;