import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import html from "../images/html.png";
import CSS from "../images/CSS.png";
import java from "../images/javascript.png";
import react from "../images/react.png";
import solidity from "../images/solidity.png";
import ethers from "../images/ethersjs.png";
import web3js from "../images/web3js.png";
import hardhat from "../images/hardhat.png";
import ganache from "../images/ganache.png";
import truffle from '../images/truffle.png'
import List from "./List";
import { Javascript } from "@mui/icons-material";

const lang = [
  { photo: solidity, name: "SOLIDITY" },
  { photo: react, name: "REACT.JS" },
  { photo: web3js, name: "WEB3.JS" },
  { photo: ethers, name: "EHTERSJS" },
  { photo: java, name: "JAVASCRIPT" },
  { photo: hardhat, name: "HARDHAT" },
  { photo: ganache, name: "GANACHE" },
  { photo: truffle, name: "TRUFFLE" },
  { photo: CSS, name: "CSS" },
  { photo: html, name: "HTML" },
];

const Tools = () => {
  return (
    <Stack
    id="tech"
      direction="column"
      sx={{ margin: "auto", gap: "80px", width: {xs: 200, sm: 400, md: 600, lg: "70vw", xl: "60vw"},paddingTop:"200px"}}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
        }}
      >
        LANGUAGES AND TOOLS
      </Typography>
      <Grid container direction="row" sx={{ gap: "20px", justifyContent:"center",width:{xs:600,sm:800,md:1000,lg:1200} }}>
        {lang.map((data, i) => (
          <List key={i} photo={data.photo} name={data.name} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Tools;
