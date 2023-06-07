import React from "react";
import Layout from '@/components/Layout';
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "animate.css";


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
             //bgcolor:'red',

            }}
          >
            <Image
              alt="image"
              src={require("../public/R.png")}
              height= "60"
              width= "70"
                borderRadius= "15"
                padding= "10"
                color= "#fff"
              
            />
            <Typography
              sx={{ fontSize:{xl:"50px",lg:"50px",md:"50px",sm:"35px",xs:"35px"}, fontWeight: "bold", color: "#bfbfbf",fontFamily:'serif' }}
            >
               Projects
            </Typography>
            <Image
              alt="image"
              src={require("../public/R.png")}
                height= "60"
                width= "70"
                borderRadius= "15"
                padding= "10"
                color= "#fff"
                
            />
          </Box>
          {/* end stack 1 */}

          {/*------------------------------ Project Template Start------------------------------ */}

          <Stack
            sx={{
              padding:'10px 0',
              alignItems:'center',
              justifyContent: "space-around",
              flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'},
              gap:{xl:0,lg:0,md:3,sm:3,xs:3},
              width:'100%',
              //bgcolor:'red'
            }}
          >
            {/* card 1 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                gap:2,
                display: "flex",
                flexDirection: "column",
                height: "290px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius:"5px 5px 25px 25px",
                border: "2px #fff solid",
                bgcolor:"#262626",
                transition:'0.3s',
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6',
                    elevation:20,
                    scale:'1.05'
                }
              }}
            >
              <Box  
                  borderRadius= "15"
                  padding= "10"   
                  marginTop="10px">
              <Image
              src={require("../public/luckychamp.jpg")}
              height= "150"
              width= "250"
               style={{
                  borderRadius:"15px"
                }}
              />
              </Box>
              <Typography sx={{ fontSize: "16px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff", }}>
               <a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://lucky-six.vercel.app/">Project Center Website</a>   
              </Typography>
            </Box>

            {/* card 2 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                gap:2,
                display: "flex",
                flexDirection: "column",
                height: "290px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius:"5px 5px 25px 25px",
                border: "2px #fff solid",
                bgcolor:"#262626",
                transition:'0.3s',
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6',
                    elevation:20,
                    scale:'1.05'
                }
              }}
            >
               <Box  
                  borderRadius= "15"
                  padding= "10"   
                  marginTop="10px">
              <Image
              src={require("../public/shopping.jpeg")}
              height= "150"
              width= "250"
              style={{
                borderRadius:"15px"
              }}
              />
              </Box>
              <Typography sx={{ fontSize: "16px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff", }}>
               <a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://shoping-todolist-auth.vercel.app/Loginpage">Shopping Website</a>   
              </Typography>
            </Box>

            {/* card 3 */}
            <Box
              className="animate__animated animate__zoomIn"
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "290px",
                width: "300px",
                alignItems: "center",
                padding: "10px",
                borderRadius:"5px 5px 25px 25px",
                border: "2px #fff solid",
                bgcolor:"#262626",
                transition:'0.3s',
                "&:hover":{
                    boxShadow:'0px 5px 8px 0px #0099e6',
                    elevation:20,
                    scale:'1.05'
                }
              }}
            >
               <Box  
                  borderRadius= "15"
                  padding= "10"   
                  marginTop="10px">
              <Image
              src={require("../public/checklist.jpeg")}
              height= "150"
              width= "250"
              style={{
                borderRadius:"15px"
              }}
              />
              </Box>
              <Typography sx={{ fontSize: "16px", color: "#bfbfbf" }}>
                Web Developement
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#fff", }}>
               <a target="_blank" style={{color:"#fff", textDecoration:"none",}} href="https://checklist-lime-gamma.vercel.app/">To-Do-List</a>   
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export default Works;
