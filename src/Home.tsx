import React from "react";
import { useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import ImageEdit from "./ImageEdit";
import './Home.css'
import { Button } from "reactstrap";

const BASE_URL = "http://localhost:5001";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [images, setImages] = useState([]);
  const [imageEditing, setImageEditing] = useState(null);

  const changeHandler = (evt) => {
    setSelectedFile(evt.target.files[0]);
    setIsFilePicked(true);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    //TODO: move this call to an api file
    console.log(formData);
    console.log("select file name - HOME", selectedFile);
    try {
      const result = await axios.post(`${BASE_URL}/api/add`, formData, {
        headers: headers,
      });
      setImages((imgs) => [...imgs, result.data]);
      console.log(images);
    } catch (err) {
      console.log(err);
    }
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
        <ImageEdit image={imageEditing}/>
      </div>
      <div className="Home upload-form">
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div className="Home file-info">
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <Button color="primary" onClick={handleSubmit} outline>Submit</Button>
        </div>
      </div>
      <div className="Home all-image-container">
        <ImageList editImage={editImage} images={images} />
      </div>
    </div>
  );
}

export default Home;
