import { useState } from "react";
import { Button } from "reactstrap";
import "./ImageEdit.css";

/** Edits an image
 *
 * Props:
 *  - image: url of current image being edited
 *           'https://s3.us-west-1.amazonaws.com/....jpeg'
 * State:
 *  - styles: object for css styling
 *            {filter: 'grayscale(100%) contrast(50%)', color: 'green'}
 *
 * Home -> ImageEdit
 */
function ImageEdit({ image }) {
  const [styles, setStyles] = useState({ filter: "" });

  function generateStyles(evt) {
    const style = evt.target.value;

    if (styles.filter.includes(style)) {
    }
    console.log(styles);
    setStyles((styles) => {
      return {
        ...styles,
        filter:
          styles.filter && styles.filter.includes(style)
            ? styles.filter.replace(style, "").trim()
            : `${styles.filter} ${style}`,
      };
    });
  }

  return (
    <div>
      {image ? (
        <div className="ImageEdit">
          <img src={image} style={styles} alt={image}></img>
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
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ImageEdit;
