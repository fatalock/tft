import React from "react";
import { ImageListItem } from "@mui/material";

const hexagonStyle = {
  width: "200px",
  clipPath: "polygon(50% 0, 74% 25%, 74% 75%, 50% 100%, 26% 75%, 26% 25%)",
  overflow: "hidden",
};

function Source(props) {
  const { item, HandleClick } = props;

  return (
    <ImageListItem sx={hexagonStyle}>
      <img
        onClick={() => HandleClick(item)} // Pass the entire item to HandleClick
        src={require(`../14.15.1/img/tft-champion/${item.image.full}`)} // Adjust the path to your images
        loading="lazy"
        className="fi"
      />
    </ImageListItem>
  );
}

export default React.memo(Source);
