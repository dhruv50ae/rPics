import React, { Component } from "react";

import SearchBar from "./SearchBar";
import axios from "axios";

export default class App extends Component {
  state = { image: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID fkk8UB4BlMQS4mUxXsrj7y3cyVqJMIWQYEzCtuKPw2k",
      },
    });
    this.setState({ image: response.data.results });
  };
  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.image.length} images
      </div>
    );
  }
}
