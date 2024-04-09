import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import heart from "../images/heart.jpg";
import plus from "../images/add.png";
import download from "../images/download.png";

type Url = {
  regular: string;
  full: string;
  small: string;
};

type Result = {
  urls: Url;
  name: string;
  id: string;
};

function Search() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = () => {
    fetch(
      `https://api.unsplash.com/photos/random?client_id=YDTj_TnwT03-oJjtJrK53ZG5BLMvqq978wsXjSbZ5n8&count=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Error fetching random images:", error);
      });
  };

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=YDTj_TnwT03-oJjtJrK53ZG5BLMvqq978wsXjSbZ5n8&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchImages();
    }
  };

  const downloadImage = (imageUrl: string, imageName: string) => {
    fetch(imageUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob();
      })
      .then((blob) => {
        if (!blob) {
          throw new Error("Blob is null");
        }

        // Convert the blob to JPG format
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((convertedBlob) => {
              if (!convertedBlob) {
                throw new Error("Converted blob is null");
              }
              // Create a the download link for the converted JPG image
              const url = window.URL.createObjectURL(convertedBlob);
              const link = document.createElement("a");
              link.href = url;

              // Set the filename with .jpg extension
              const filename = `${imageName}.jpg`;
              link.setAttribute("download", filename);

              // download
              document.body.appendChild(link);
              link.click();

              document.body.removeChild(link);
            }, "image/jpeg");
          }
        };
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <div className="App">
      <div
        className="mydiv"
        style={{ margin: "0", display: "flex", alignItems: "center" }}
      >
        <Link to="/">
          <img className="logo-main" src={logo} alt="Home Page" />
        </Link>
        <input
          className="main-input"
          placeholder="Search high-resolution images"
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress} // Enter key press
        />
      </div>
      <div className="gallery">
        {results.map((item) => (
          <div className="container" key={item.id}>
            <img className="items" src={item.urls.regular} alt={item.name} />
            <div className="middle">
              <button className="image-icons">
                <Link to="/login">
                  <img className="text top" src={heart} alt="" />
                </Link>
              </button>
              <button className="image-icons">
                <Link to="/login">
                  <img className="text top" src={plus} alt="" />
                </Link>
              </button>
              <button
                className="image-icons"
                onClick={() => downloadImage(item.urls.regular, "React_image")}
              >
                <img className="text top" src={download} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
