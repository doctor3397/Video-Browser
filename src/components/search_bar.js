import React, { Component } from 'react';
// const Component = React.Component;

// Function component
// const SearchBar = () => {
//   return <input/> // React.createElement
// }

// Class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    const term = event.target.value;
    // console.log(event);
    // console.log(term);
    this.setState({ term: term });
    this.props.videoSearch(term);
  }

  // Must define a render function and return JSX
  render() {
    // Pass to the element we want to monitor
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // Control conponent: Set the state with the value of user input // Value of the input: {this.state.term}
          onChange={ event => this.onInputChange(event)} />
      </div>
    );
    // return <input onChange={this.onInputChange} />;
  }

  // Create an Input Event Handler
  // onInputChange(event) {
  //   // console.log(event);
  //   // console.log(event.target.value);
  // }
}

export default SearchBar;
