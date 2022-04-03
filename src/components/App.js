import React, { Component } from "react";

import SearchBar from "./SearchBar";
import axios from "axios";

export default class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID fkk8UB4BlMQS4mUxXsrj7y3cyVqJMIWQYEzCtuKPw2k",
      },
    });
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
