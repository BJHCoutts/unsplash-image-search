import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async searchterm => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: searchterm
      }
    });
    this.setState({ images: res.data.results });
  };

  // onSearchSubmit(searchterm) {
  //   axios.get("https://api.unsplash.com/search/photos/?client-id=26f607af76ce9acac042bf1239f1cd2644b2f6aa1f575a4bbc805bff97dc8924", {
  //       params: {
  //         query: searchterm
  //       }
  //     })
  //   console.log(res.data.results);
  // }.then(res => {console.log(res.data.results)})

  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          Number of search results: {this.state.images.length}
          <ImageList images={this.state.images} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
