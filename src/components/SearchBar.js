import React from "react";

class SearchBar extends React.Component {
  state = {
    searchterm: "car"
  };

  onInputChange = e => {
    this.setState({
      searchterm: e.target.value
    });
  };

  onInputClick() {
    console.log("I was clicked!");
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchterm);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.searchterm}
              onChange={this.onInputChange}
              onClick={this.onInputClick}
            />
            {/* <input
              type="text"
              value={this.state.searchterm}
              onChange={e => this.setState({ searchterm: e.target.value })}
              onClick={() => {
                console.log("I was click as an arrow!");
              }}
            /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
