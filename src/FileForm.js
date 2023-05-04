import { useState } from "react";

function FileForm({ handleSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);


  function changeHandler (evt) {
    setSelectedFile(evt.target.files[0]);
    setIsFilePicked(true);
  };

  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", selectedFile);

  //   const headers = {
  //     "Content-Type": "multipart/form-data"
  //   };

  //   //TODO: move this call to an api file
  //   console.log(formData);
  //   console.log("select file name - HOME", selectedFile);
  //   try {
  //     const result = await axios.post(`${BASE_URL}/api/add`, formData, {headers:headers});
  //     setImages(imgs => [...imgs, result.data])
  //     console.log(images);

  //   } catch (err) {
  //     console.log(err);
  //   }

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

export default FileForm