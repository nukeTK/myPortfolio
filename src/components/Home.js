import { AppBar, Link, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Education from "./Education";
import About from "./About";
import Tools from "./Tools";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#C0CAE6",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "80vw" },
          margin: "auto",
          position: "fixed",
          left: "0%",
          right: "0%",
          borderRadius: "10px",
        }}
      >
        <Container
          sx={{
            padding: "10px",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
            },
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Link href="#home" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              HOME
            </Typography>
          </Link>
          <Link href="#education" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              EDUCATION
            </Typography>
          </Link>
          <Link href="#about" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              ABOUT
            </Typography>
          </Link>
          <Link href="#tech" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              LANGUAGES AND TOOLS
            </Typography>
          </Link>
          <Link href="#projects" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              PROJECTS
            </Typography>
          </Link>
          <Link href="#contact" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: "#646F76",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              CONTACT
            </Typography>
          </Link>
        </Container>
      </AppBar>
      <Stack
        id="home"
        sx={{
          margin: "auto",
          width: {xs: 0, sm: 600, md: 960, lg: "60%", xl: "60%"},
          paddingTop: "300px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#474554",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
          }}
        >
          Hello, I am Tarandeep{" "}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#646F76",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
          }}
        >
          - A Blockchain Developer
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{ margin: "auto", gap: "30px", width: {xs: 0, sm: 600, md: 960, lg: "50%", xl: "50%"}, padding: "50px" }}
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
      <Education />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
