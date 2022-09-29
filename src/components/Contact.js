import { Link, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
/* import cv from "../doc/cv1.pdf"; */

const Contact = () => {
  /*  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "Tarandeep.pdf";
    link.href = cv;
    link.click();
  }; */
  return (
    <Stack
      id="contact"
      direction="column"
      sx={{
        margin: "300px auto",
        width: {xs: 0, sm: 0, md: 0, lg: "60%", xl: "60%"},
        paddingTop: "200px",
        gap: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: "auto",
          color: "#646F76",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
        }}
      >
        Lets Build Together
      </Typography>
      <Stack
        direction="row"
        sx={{
          margin: "auto",
          gap: "30px",
          width: {xs: 200, sm: 400, md: 600, lg: "20%", xl: "20%"},
          justifyContent: "center",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/tarandeep-singh-a81297242/"
          underline="none"
          target="_blank"
        >
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#C0CAE6",
              borderRadius: "100px",
              transition: "0.4s ease",
              "&:hover": {
                transform: "scale(1.5)",
                cursor: "pointer",
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: "0.7cm", padding: "10px" }} />
          </Paper>
        </Link>
        <Link href="https://github.com/nukeTK" underline="none" target="_blank">
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#C0CAE6",
              borderRadius: "100px",
              transition: "0.4s ease",
              "&:hover": {
                transform: "scale(1.5)",
                cursor: "pointer",
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: "0.7cm", padding: "10px" }} />
          </Paper>
        </Link>
        <Link
          href="https://twitter.com/Tarande01809971"
          underline="none"
          target="_blank"
        >
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#C0CAE6",
              borderRadius: "100px",
              transition: "0.4s ease",
              "&:hover": {
                transform: "scale(1.5)",
                cursor: "pointer",
              },
            }}
          >
            <TwitterIcon sx={{ fontSize: "0.7cm", padding: "10px" }} />
          </Paper>
        </Link>
      </Stack>

      <Link href="#home" underline="none">
        <Paper
          elevation={10}
          sx={{
            margin: "auto",
            width: "7%",
            backgroundColor: "#C0CAE6",
            borderRadius: "100px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <KeyboardDoubleArrowUpIcon
            sx={{ fontSize: "1cm", padding: "10px" }}
          />
        </Paper>
      </Link>
    </Stack>
  );
};

export default Contact;
