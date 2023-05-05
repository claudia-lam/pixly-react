import { useState } from "react";
import "./ImageList.css";
import ImageEdit from "./ImageEdit";

function ImageList({ images, editImage }) {
  // const [imageEditing, setImageEditing] = useState(null);

  // function editImage(evt) {
  //   evt.preventDefault();
  //   const img = evt.target.src;
  //   setImageEditing(img);
  // }
  //TODO: fix the alt tag
  return (
    <div className="ImageList">
      {images.map((img, i) => (
        <img key={i} src={img} alt={i} onClick={editImage}></img>
      ))}
    </div>
  );
}

export default ImageList;
