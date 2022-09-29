import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import lpu from "../images/lpu.png";
import { Divider, Paper, Stack, Typography } from "@mui/material";

const Education = () => {
  return (
    <>
      {" "}
      <Stack
      id="education"
        direction="row"
        sx={{ margin: "250px auto", gap: "100px",  width: {xs: 0, sm: 600, md: 960, lg: "60%", xl: "60%"}, paddingTop:"200px" }}
      >
        <Stack>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
            }}
          >
            EDUCATION
          </Typography>
          <br></br>
          <br></br>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "250px",
                width: {xs: "200px", sm:" 200px", md: "70px", lg: "70px", xl: "70px"},
                height: "70px",
                padding: "5px",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            >
              <img className="mine" src={lpu} alt="mine" />
            </Paper>
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                LOVELY PROFESSIONAL UNIVERSITY
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                2016
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                BACHELOR OF TECHNOLOGY (COMPUTER SCIENCE & ENGINERRING)
              </Typography>
            </Stack>
          </Stack>
          <br></br>
          <Divider />
          <br></br>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "250px",
                width: "70px",
                height: "70px",
                padding: "5px",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "scale(1.09)",
                },
                backgroundColor: "#CECECE",
              }}
            >
              <SchoolIcon sx={{ fontSize: "1.8cm", color: "#615F6F" }} />
            </Paper>
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                KENDRIYA VIDYALAYA (CBSE)
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                2012
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                SENIOR SECONDARY EDUCATION (12TH)
              </Typography>
            </Stack>
          </Stack>
          <br></br>
          <Divider />
          <br></br>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Paper
              elevation={10}
              sx={{
                borderRadius: "250px",
                width: "70px",
                height: "70px",
                padding: "5px",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "scale(1.09)",
                },
                backgroundColor: "#CECECE",
              }}
            >
              <SchoolIcon sx={{ fontSize: "1.8cm", color: "#615F6F" }} />
            </Paper>
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                KENDRIYA VIDYALAYA (CBSE)
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                2010
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#646F76",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                }}
              >
                SECONDARY EDUCATION (10TH)
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Education;
