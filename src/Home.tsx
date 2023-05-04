import React from "react";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (evt) => {
    setSelectedFile(evt.target.files[0]);
    setIsFilePicked(true);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    // const data = {
    //   filename: selectedFile.name,
    //   filetype: selectedFile.type,
    //   size: selectedFile.size
    // }

    // formData.append(data)

    const headers = {
      "Content-Type": "multipart/form-data"
    };
    // formData.append("filename", selectedFile.name);

    //TODO: move this call to an api file
    console.log(formData);
    console.log("select file name - HOME", selectedFile);
    try {
      const result = await axios.post(`${BASE_URL}/api/add`, formData, {headers:headers});
      console.log(result);

    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Home;
