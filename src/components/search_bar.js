import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onTermChange = this.onTermChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onTermChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  onInputChange(event) {
    this.onTermChange(event.target.value);
  }

  render() {
    return(
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

export default SearchBar;
