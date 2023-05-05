import { useState } from "react";
import "./ImageList.css";

/** Show list of all images
 *
 * Props:
 *  - images: [imgUrl1, imgUrl2,...]
 *  - editImage: function to call when image is clicked
 *
 * State: none
 *
 * Home -> ImageList
 */
function ImageList({ images, editImage }) {
  return (
    <div className="ImageList">
      <h4>Select an image to edit!</h4>
      {images.map((img, i) => (
        <img key={i} src={img} alt={i} onClick={editImage}></img>
      ))}
    </div>
  );
}

export default ImageList;
