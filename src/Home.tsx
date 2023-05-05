import React from "react";
import { useState } from "react";
import ImageList from "./ImageList";
import ImageEdit from "./ImageEdit";
import "./Home.css";
import PixlyApi from "./Api";
import FileForm from "./FileForm";

/** Controls the entire app
 *
 * Props: none
 *
 * State:
 *  - images: list of img urls from backend API
 *            ['imgURL1', 'imgURL2',...]
 *
 *  - imageEditing: url of current image being edited
 *             'https://s3.us-west-1.amazonaws.com/....jpeg'
 *
 * App -> Home -> [ImageEdit, FileForm, ImageList]
 */

function Home() {
  const [images, setImages] = useState([]);
  const [imageEditing, setImageEditing] = useState(null);

  /** Triggered by file form submit; reloads images. */
  async function addImage(image) {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const response = await PixlyApi.fetchImg(headers, image);
    setImages((imgs) => [...imgs, response]);
  }

  /** Triggered by image click in ImageList component; reloads editing image. */
  function editImage(evt) {
    evt.preventDefault();
    const img = evt.target.src;
    setImageEditing(img);
    // console.log("editing img", imageEditing);
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
