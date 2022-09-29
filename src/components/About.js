import React from 'react'
import mine from "../images/mine.jpg";
import {
    Paper,
    Stack,
    Typography,
  } from "@mui/material";

const About = () => {
  return (
    <Stack
    id="about"
    direction="row"
    sx={{ margin: "250px auto", gap: "100px", width: "60%", paddingTop:"200px" }}
  >
    <Stack>
      <Typography variant="h3">ABOUT</Typography>
      <br></br>
      <br></br>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#646F76",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
        }}
      >
        A self-taught blockchain developer
      </Typography>
      <br></br>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#646F76",
          fontFamily: "monospace",
          fontWeight: 800,
        }}
      >
        My name is Tarandeep Singh, I am looking for the opportunity to work
        in a web3 organization, where I can utilize my skills and knowledge
        efficiently and gather more knowledge about the web3 space, NFT,
        DAO, Defi, and experiences to develop my skills for the success of
        the organization.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#646F76",
          fontFamily: "monospace",
          fontWeight: 800,
        }}
      >
        I would describe myself as someone who is passionate about web3, how
        it is changing the internet, data immutability, and many more things
        we can build more securely on web3.
      </Typography>
    </Stack>
    <Stack sx={{ width: "90%" }}>
      <Paper
        elevation={10}
        sx={{
          borderRadius: "300px",
          width: "350px",
          height: "400px",
          padding: "10px",
          transition: "0.4s ease",
          "&:hover": {
            transform: "scale(1.09)",
          },
        }}
      >
        <img className='mine' src={mine} alt="mine" />
      </Paper>
    </Stack>
  </Stack>
  )
}

export default About;