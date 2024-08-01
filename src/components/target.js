import React from "react";
import { ImageListItem } from "@mui/material";
import zed from "../14.15.1/img/tft-champion/TFTTutorial_Zed.png";

const hexagonStyle = {
  width: "200px",
  clipPath: "polygon(50% 0, 74% 25%, 74% 75%, 50% 100%, 26% 75%, 26% 25%)",
  overflow: "hidden",
  background: "blue",
};

function Target(props) {
  if (props.dataOne) {
    console.log(`../14.15.1/img/tft-champion/${props.dataOne.image.full}`);
  }

  function HandleDelete(){
    if (props.dataOne) {
      props.HandleClick([props.dataOne,props.index])
    }
  }

  return (
    <ImageListItem sx={hexagonStyle}>
      <img
        src={props.dataOne ? require(`../14.15.1/img/tft-champion/${props.dataOne.image.full}`) : zed}
        loading="lazy"
        className="fi"
        onClick={HandleDelete}
      />
    </ImageListItem>
  );
}

export default React.memo(Target);
