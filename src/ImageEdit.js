import { useState } from "react";
import { Button } from "reactstrap";
import "./ImageEdit.css";
import * as htmlToImage from "html-to-image";
import { toJpeg } from "html-to-image";

/** Edits an image
 *
 * Props:
 *  - image: url of current image being edited
 *           'https://s3.us-west-1.amazonaws.com/....jpeg'
 * State:
 *  - styles: object for css styling
 *            {filter: 'grayscale(100%) contrast(50%)', color: 'green'}
 *  - saveBtnText: string
 *
 * Home -> ImageEdit
 */
function ImageEdit({ image }) {
  const resetImage = { filter: "" };
  const [styles, setStyles] = useState(resetImage);
  const [saveBtnText, setsaveBtnText] = useState("Save");

  function generateStyles(evt) {
    const style = evt.target.value;

    if (style === "reset") {
      setStyles(resetImage);
    } else {
      setStyles((styles) => {
        return {
          ...styles,
          filter:
            styles.filter?.includes(style)
              ? styles.filter.replace(style, "").trim()
              : `${styles.filter} ${style}`,
        };
      });
    }
  }

  //TODO: this might work for download
  // async function downloadImg() {
  //   const img = document.getElementById("edited-image");
  //   const dataUrl = await htmlToImage.toJpeg(img, { quality: 0.95 });
  //   const link = document.createElement("a");
  //   link.download = "my-image-name.jpeg";
  //   link.href = dataUrl;
  //   link.click();
  // }

  function changeText() {
    setsaveBtnText(`jk it's broken`);
  }

  return (
    <div>
      {image ? (
        <div className="ImageEdit">
          <img id="edited-image" src={image} style={styles} alt={image}></img>
          <div className="ImageEdit btns">
            <Button
              onClick={generateStyles}
              value="grayscale(100%)"
              className="black-white"
            >
              B&W
            </Button>
            <Button
              color="info"
              onClick={generateStyles}
              value="contrast(800%)"
              className="contrast"
              outline
            >
              Contrast
            </Button>
            <Button
              color="warning"
              onClick={generateStyles}
              value="sepia(100%)"
              className="sepia"
              outline
            >
              Sepia
            </Button>
            <Button
              color="info"
              onClick={generateStyles}
              value="invert(100%)"
              className="invert"
            >
              Invert
            </Button>
            <Button
              color="danger"
              onClick={generateStyles}
              value="reset"
              className="reset"
              outline
            >
              Reset
            </Button>
            <Button
              color="success"
              onClick={changeText}
              value="save"
              className="save"
              outline
            >
              {saveBtnText}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h2>No image selected</h2>
        </div>
      )}
    </div>
  );
}

export default ImageEdit;
