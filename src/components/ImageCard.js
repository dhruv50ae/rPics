import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.imageRef);
  }
  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
