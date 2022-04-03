import React from "react";

const ImageCard = (props) => {
  const { urls, description } = props.image;
  return (
    <div>
      <img src={urls.regular} alt={description} />
    </div>
  );
};

export default ImageCard;
