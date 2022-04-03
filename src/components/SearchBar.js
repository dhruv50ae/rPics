import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
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
