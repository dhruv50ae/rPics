import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
