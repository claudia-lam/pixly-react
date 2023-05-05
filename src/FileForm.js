import { useState } from "react";
import "./FileForm.css";
import { Button } from "reactstrap";

function FileForm({ addImage }) {
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
    addImage(formData);
  }

  return (
    <div className="FileForm">
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
          <Button color="primary" onClick={handleSubmit} outline>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FileForm;
