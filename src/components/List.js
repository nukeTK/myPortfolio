import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const List = (props) => {
  return (
    <Paper
      elevation={10}
      sx={{
  
        width: "200px",
        height: "60px",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="row"
        sx={{ alignContent: "center", alignItems: "center" ,gap:"20px"}}
      >
        <img className="logo" src={props.photo} alt="html" />
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
          }}
        >
          {props.name}
        </Typography>
      </Stack>
    </Paper>
  );
};
export default List;
