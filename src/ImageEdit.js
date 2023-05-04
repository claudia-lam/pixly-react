function ImageEdit({ image }) {
  const styles = {
    filter: "grayscale(80%)",
  };

  return (
    <div>
      {image ? (
        <div className="ImageEdit">
          <img src={image} style={styles} alt={image}></img>
          <button className="black-white">Black/White</button>
        </div>
      ) : null}
    </div>
  );
}

export default ImageEdit;
