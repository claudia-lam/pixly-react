import { useState } from "react";
import { Button } from "reactstrap";
import "./ImageEdit.css";

function ImageEdit({ image }) {
  const [styles, setStyles] = useState({ filter: "" });

  function generateStyles(evt) {
    setStyles((styles) => {
      return {
        ...styles,
        filter: styles.filter + evt.target.value,
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
              outline
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
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ImageEdit;
