import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Target from "./target";

function TargetAll(props) {
  return (
    <Grid container spacing={2}>
      {props.data.map((item, index) => (
        <Grid item md={3} className="target" key={index}>
          <Target dataOne={item} HandleClick={props.HandleClick2} index={index}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(TargetAll);
