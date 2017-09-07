import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: 'Ron' };
	}

	render() {
		return (
			<input value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
		);
	}

	onInputChange(event) {
		this.setState	
	}
}

export default SearchBar;