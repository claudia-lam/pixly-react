import React from "react";
import { useState } from "react";
import ImageList from "./ImageList";
import ImageEdit from "./ImageEdit";
import "./Home.css";
import PixlyApi from "./Api";
import FileForm from "./FileForm";

function Home() {
  const [images, setImages] = useState([]);
  const [imageEditing, setImageEditing] = useState(null);

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  async function addImage(image) {
    const response = await PixlyApi.fetchImg(headers, image);
    setImages((imgs) => [...imgs, response]);
  }

  function editImage(evt) {
    evt.preventDefault();
    const img = evt.target.src;
    setImageEditing(img);
  }

  return (
    <div className="Home">
      <h1>PIX.LY</h1>
      <div className="Home edit-image-area">
        <ImageEdit image={imageEditing} />
      </div>
      <div className="Home all-image-container">
        <FileForm addImage={addImage} />
      </div>
      <div className="Home all-image-container">
        <ImageList editImage={editImage} images={images} />
      </div>
    </div>
  );
}

export default Home;
