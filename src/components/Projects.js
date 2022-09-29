import { Button, Grid, Link, Paper, Typography } from "@mui/material";
import { Box, Stack} from "@mui/system";
import React from "react";
import nft from "../images/nft.jpg";
import cfunding from "../images/crowdfunding.jpg";
import lottery from "../images/lottery.jpg";
import staking from "../images/staking.png";
import styled from "styled-components";
const Overlay = styled(Box)`
  :hover {
    background: rgba(200, 200, 255, 0.9);
    cursor: pointer;
  }
`;

const Projects = () => {
  return (
    <Stack
      id="projects"
      direction="column"
      sx={{
        margin: "250px auto",
        gap: "50px",
        width: {xs: 400, sm: 400, md: 960, lg: "70vw", xl: "70vw"},
        padding: "200px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",  
          fontWeight: 700,
          letterSpacing: ".1rem",
        }}
      >
        TOP PROJECTS
      </Typography>
      <Grid
        container
        direction="row"
        sx={{ gap: "50px", justifyContent: "center" }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "450px",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#C0CAE6",
            position: "relative",
          }}
        >
          <img className="nft" alt="nft" src={nft} />
          <Overlay
            sx={{
              position: "absolute",
              width: "490px",
              height: "260px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0)",
              transition: "background 0.5s ease",
              top: "0",
              left: "0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                textAlign: "center",
                padding: "80px",
                opacity: "0",
                "&:hover": {
                  opacity: "1",
                  display: "block",
                  color: "#474554",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#474554",
                  fontFamily: "monospace",
                  fontWeight: 500,
                }}
              >
                NFT MARKETPLACE
              </Typography>
              SOLIDITY | REACT.JS | ETHERS.JS | HARDHAT | MATERIAL UI | PINATA
              <Link
                underline="none"
                target="_blank"
                href="https://nuketk.github.io/NFTMarketStoreDapp/  "
              >
                <Button variant="contained">VISIT THE WEBSITE</Button>
              </Link>
            </Typography>
          </Overlay>
        </Paper>

        <Paper
          elevation={10}
          sx={{
            width: "450px",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#C0CAE6",
            position: "relative",
          }}
        >
          <img className="nft" alt="nft" src={cfunding} />
          <Overlay
            sx={{
              position: "absolute",
              width: "490px",
              height: "260px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0)",
              transition: "background 0.5s ease",
              top: "0",
              left: "0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                padding: "80px",
                opacity: "0",
                "&:hover": {
                  opacity: "1",
                  display: "block",
                  color: "#474554",
                },
              }}
            >
              {" "}
              <Typography
                variant="h5"
                sx={{
                  color: "#474554",
                  fontFamily: "monospace",
                  fontWeight: 500,
                }}
              >
                CROWDFUNDING DAPP
              </Typography>
              SOLIDITY | REACT.JS | ETHERS.JS | HARDHAT | BOOTSTRAP
              <br></br>
              <Link
                underline="none"
                target="_blank"
                href="http://nukeTK.github.io/CrowdFundingDapp"
              >
                <Button variant="contained">VISIT THE WEBSITE</Button>
              </Link>
            </Typography>
          </Overlay>
        </Paper>

        <Paper
          elevation={10}
          sx={{
            width: "450px",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#C0CAE6",
            position: "relative",
          }}
        >
          <img className="nft" alt="nft" src={lottery} />
          <Overlay
            sx={{
              position: "absolute",
              width: "490px",
              height: "260px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0)",
              transition: "background 0.5s ease",
              top: "0",
              left: "0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                padding: "80px",
                opacity: "0",
                "&:hover": {
                  opacity: "1",
                  display: "block",
                  color: "#474554",
                },
              }}
            >
              {" "}
              <Typography
                variant="h5"
                sx={{
                  color: "#474554",
                  fontFamily: "monospace",
                  fontWeight: 500,
                }}
              >
                LOTTERY DAPP
              </Typography>
              SOLIDITY | REACT.JS | ETHERS.JS | HARDHAT | BOOTSTRAP
              <br></br>
              <Link
                target="_blank"
                href="https://github.com/nukeTK/LotteryDapp"
              >
                <Button variant="contained">VISIT THE CODE</Button>
              </Link>
            </Typography>
          </Overlay>
        </Paper>

        <Paper
          elevation={10}
          sx={{
            width: "450px",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#C0CAE6",
            position: "relative",
          }}
        >
          <img className="nft" alt="nft" src={staking} />
          <Overlay
            sx={{
              position: "absolute",
              width: "490px",
              height: "260px",
              borderRadius: "10px",
              background: "rgba(0, 0, 0, 0)",
              transition: "background 0.5s ease",
              top: "0",
              left: "0",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                padding: "80px",
                opacity: "0",
                "&:hover": {
                  opacity: "1",
                  display: "block",
                  color: "#474554",
                },
              }}
            >
              {" "}
              <Typography
                variant="h5"
                sx={{
                  color: "#474554",
                  fontFamily: "monospace",
                  fontWeight: 500,
                }}
              >
                STAKING DAPP
              </Typography>
              SOLIDITY | REACT.JS | ETHERS.JS | HARDHAT | MATERIAL UI
              <br></br>
              <Link target="_blank" href="http://nukeTK.github.io/StakingDapp">
                <Button variant="contained">VISIT THE WEBSITE</Button>
              </Link>
            </Typography>
          </Overlay>
        </Paper>
      </Grid>
      <Box sx={{textAlign:"center"}}>
      <Button variant="contained" disabled sx={{width:"300px"}}>Visit Github for more projects</Button>
      </Box>
    </Stack>
  );
};
export default Projects;
