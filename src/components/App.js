import React, { Component } from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { image: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID fkk8UB4BlMQS4mUxXsrj7y3cyVqJMIWQYEzCtuKPw2k",
        },
      }
    );
    this.setState({ image: response.data.results });
  };
  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.image} />
      </div>
    );
  }
}
