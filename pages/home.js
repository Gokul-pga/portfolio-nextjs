import React from "react";
import Layout from "@/components/Layout";
import { Box, Stack, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import "animate.css";

function Homepage() {
  return (
    <>
      <Layout>
        <Stack  margin="30px 60px 0 60px" height='100vh' >
          <Stack
            gap={3}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              backgroundColor: "#1a1a1a",
              padding: "20px 0",
              width: {
                xl: "50%",
                lg: "50%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: "25px",
            }}
          >
            <div className="animate__animated animate__zoomInLeft">
              <Box
                sx={{
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <Image
                  alt="green iguana"
                  src={require("../public/gokul.jpg")}
                  height="280"
                  width="250"
                  borderRadius="15"
                  border="3px #4d4d4d solid"
                  padding="10"
                />
              </Box>
            </div>
            <Box
              className="animate__animated animate__zoomInRight"
              gap={3}
              sx={{
                margin: "35px 0 35px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "25px", color: "#fff", fontFamily: "serif" }}
                >
                  GOKULANAND
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", color: "#fff", fontFamily: "serif" }}
                >
                  BE - MECHATRONICS
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: "20px", color: "#fff", fontFamily: "serif" }}
              >
                I AM A WEB DEVELOPER
              </Typography>
            </Box>
          </Stack>

          <Stack>
            <Box></Box>
            <Stack>
              <Box></Box>
              <Box></Box>
            </Stack>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export default Homepage;
