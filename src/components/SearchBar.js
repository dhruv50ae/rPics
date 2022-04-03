import React, { Component } from "react";

export default class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              onChange={(event) => {
                console.log(event.target.value);
              }}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
