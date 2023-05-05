import { useState } from "react";
import "./FileForm.css";
import { Button } from "reactstrap";

/** Form for uploading an image
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls addImage function prop
 *
 * Home -> FileForm
 */

function FileForm({ addImage }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  const changeHandler = (evt) => {
    setSelectedFile(evt.target.files[0]);
    setIsFilePicked(true);
  };

  /** Handle form submit:
   *
   * Calls addImage func prop and, if not successful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      addImage(formData);
    } catch (err) {
      setFormErrors(err);
    }
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
        {formErrors.length ? (
          <p>{`Image unsuccessfully added ${formErrors.message}`}</p>
        ) : null}
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
