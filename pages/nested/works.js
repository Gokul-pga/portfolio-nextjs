import React from "react";
import Layout from '@/components/Layout';
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import lancer from "@/assests/R.png";
import todolist from "@/assests/checklist.jpeg";
import shopping from "@/assests/shopping.jpeg";

function Works() {
  return (
    <>
      <Layout>
        <Stack gap={3} flex={1} margin="30px 60px 100px 60px" >
          {/* start stact 1  */}
          <Box
            className="animate__animated animate__flip"
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "25px",
            }}
          >
            <CardMedia
              alt="image"
              image={lancer}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "15px",
                padding: "10px",
                color: "#fff",
              }}
            />
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", color: "#bfbfbf" }}
            >
              All projects
            </Typography>
            <CardMedia
              alt="image"
              image={lancer}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "15px",
                padding: "10px",
              }}
            />
          </Box>
          {/* end stack 1 */}

          {/*------------------------------ Project Template Start------------------------------ */}

          <Stack
            sx={{
              margin: "0 20px 30px 20px",
              alignItems:'center',
              justifyContent: "space-around",
              flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'},
              gap:{xl:0,lg:0,md:4,sm:4,xs:4},
              width:'100%'
            }}
          >
            {/* card 1 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "250px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius: "30px",
                border: "2px #666666 solid",
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6',
                    elevation:20
                }
              }}
            >
              <CardMedia
                image={todolist}
                sx={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              />
              <Typography sx={{ fontSize: "20px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                To-Do-List
              </Typography>
            </Box>

            {/* card 2 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "250px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius: "30px",
                border: "2px #666666 solid",
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6'
                    
                }
              }}
            >
              <CardMedia
                image={shopping}
                sx={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              />
              <Typography sx={{ fontSize: "20px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                Shoppy Website
              </Typography>
            </Box>

            {/* card 3 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "250px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius: "30px",
                border: "2px #666666 solid",
                // transition: 2s,
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6',
                }
              }}
            >
              <CardMedia
                image={todolist}
                sx={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              />
              <Typography sx={{ fontSize: "20px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                To-Do-List
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export default Works;
