import React from "react";
import { Grid } from "@mui/material";
import Source from "./source";
import ahri from "../14.15.1/img/tft-champion/TFT12_Ahri.TFT_Set12.png";
import dataAll from "C:/Users/fatih/Desktop/projects/js shit/tft/src/14.15.1/data/en_US/tft-champion.json"

const data = dataAll.data

function SourceAll(props) {
  
    // Convert data object into an array of items
    const sources = Object.keys(data).map(key => data[key]);
  
    return (
      <Grid container>
        {sources.map((item, index) => (
          <Grid item md={2} key={index}>
            <Source
              item={item} // Pass the entire item object as a prop
              HandleClick={() => props.HandleClick2(item)} // Pass the item object to HandleClick2
            />
          </Grid>
        ))}
      </Grid>
    );
  }

export default React.memo(SourceAll);
