import React from 'react';
import './Search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  handleOnChange = event => {
    event.persist();
    this.setState(
      { searchText: event.target.value },
      this.handleOnSearch
    );
  }

  handleOnSearch = () => {
    this.props.onSearch(this.state.searchText);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search...'
          onChange={this.handleOnChange}
        />
      </div>
    )
  }

}

export default Search;
