import React, { useState } from "react";

function App() {
  const images = [
    "https://picsum.photos/id/101/200",
    "https://picsum.photos/id/102/200",
    "https://picsum.photos/id/103/200",
    "https://picsum.photos/id/104/200"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Image Gallery</h1>

      {/* Large Preview */}
      <img
        src={selectedImage}
        alt="Preview"
        style={{
          width: "400px",
          height: "300px",
          border: "2px solid black",
          marginBottom: "20px",
          transition: "0.3s"
        }}
      />

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setSelectedImage(img)}
            style={{
              width: "100px",
              height: "80px",
              cursor: "pointer",
              border: "2px solid gray",
              transition: "transform 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        ))}
      </div>
    </div>
  );
}

export default App;