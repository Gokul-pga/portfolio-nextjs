import { Box, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import Layout from '@/components/Layout';
import Image from 'next/image';
import "animate.css";


function About() {
  return (
    <>
    <Layout>    {/* start stack 1 */}
    <Stack flex={1} gap={3} padding='30px 60px 0 60px'>
    <Box gap={2} sx={{display:'flex', flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'}}}>

      <Stack flex={1} >
      <Box className='animate__animated animate__fadeInLeft' sx={{backgroundColor:'#262626',alignItems:'center',padding:'30px',borderRadius:'20px'}}> 
     <Image alt="green iguana"                   src={require("../public/gokul.jpg")}
 width='250' height='270' borderRadius='10' padding='10' />
     </Box>
      </Stack>

      <Stack  flex={3} gap={3} sx={{flexDirection:'column'}} >
      <Box
            className="animate__animated animate__flipInY"
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
      <Image
              alt="image"
              src={require("../public/R.png")}
              height= "60"
              width= "60"
              sx={{
                borderRadius: "15px",
                padding: "10px",
                color: "#fff",
              }}
            />
            <Typography
              sx={{ fontSize:{xl:'70px',lg:'70px',md:'70px',sm:'35px',xs:'35px'}, fontWeight: "bold", color: "#bfbfbf" }}
            >
              SELF-SUMMARY
            </Typography>
            <Image
              alt="image"
              src={require("../public/R.png")}
              height= "60"
              width= "60"
              sx={{
                borderRadius: "15px",
                padding: "10px",
              }}
            />
          </Box>
        <Box className="animate__animated animate__fadeInRight"  sx={{backgroundColor:'#262626',padding:'20px',borderRadius:'20px',border:'1px #595959 solid',color:'#fff'}}>
          <Typography sx={{fontWeight:'bold',fontSize:'30px'}}>Gokulanand P</Typography>
          <Typography sx={{fontSize:'25px',color:' #a6a6a6'}}>B.E - Mechatronics Engineering</Typography>
          <Typography sx={{fontSize:'20px',color:' #a6a6a6'}}>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</Typography>
        </Box>
      </Stack>

    </Box>
    {/* end stack 1 */}
    
      {/*start stack 2 */}
    <Box  gap={2} sx={{display:'flex',flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'}}}>
    <Stack gap={1} flex={1}  className='animate__animated animate__zoomIn' sx={{border:'1px #595959 solid',backgroundColor:'#262626',padding:'20px',borderRadius:'20px',color:'#fff'}}>
      <Typography sx={{fontSize:'25px'}}>Education</Typography>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>2019 - 2023</Typography>
        <Typography>SNS College Of Technology</Typography>
        <Typography>CGPA - 8.9%</Typography>
      </Box>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>2017 - 2019</Typography>
        <Typography>Sri Ragavendra Matric Hr.Sec School</Typography>
        <Typography>HSC - 54%</Typography>
        <Typography>SSLC - 87%</Typography>
      </Box>
      </Stack>

      <Stack gap={1} flex={1}  className='animate__animated animate__zoomIn' sx={{border:'1px #595959 solid',backgroundColor:'#262626',padding:'20px',borderRadius:'20px',color:'#fff'}}>
      <Typography sx={{fontSize:'25px'}}>Work Experience</Typography>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>Apr - 2022</Typography>
        <Typography>Fox Company</Typography>
        <Typography>Operating CNC Machine, Basic Programmer and CNC Maintenance</Typography>
      </Box>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>Nov 2021 - Dec 2021</Typography>
        <Typography>Gugan Machine Equipments</Typography>
        <Typography>Machine Operator and Machine Maintenance</Typography>
        
      </Box>
      </Stack>
    </Box>
    {/* end stack 2 */}

      {/* start stack 3 */}
    <Box gap={2}  sx={{display:'flex',flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'}}}>

      <Stack gap={1} flex={1}  className='animate__animated animate__zoomIn' sx={{border:'1px #595959 solid',backgroundColor:'#262626',padding:'20px',borderRadius:'20px',color:'#fff'}}>
      <Typography sx={{fontSize:'25px'}}>Area Of Interest</Typography>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>Web Developement</Typography>
        <Typography>Photography</Typography>
        <Typography>Video Editing</Typography>
      </Box>
      </Stack>
      <Stack gap={1} flex={1}  className='animate__animated animate__zoomIn' sx={{border:'1px #595959 solid',backgroundColor:'#262626',padding:'20px',borderRadius:'20px',color:'#fff'}}>
      <Typography sx={{fontSize:'25px'}}>Skills</Typography>
      <Box sx={{fontSize:'15px',color:' #a6a6a6'}}>
        <Typography>HTML & CSS</Typography>
        <Typography>Javascript</Typography>
        <Typography>Material UI</Typography>
        <Typography>React JS</Typography>
        <Typography>React Native</Typography>
        <Typography>My SQL</Typography>
      </Box>
      </Stack>

      <Stack gap={1} flex={1}  className='animate__animated animate__zoomIn' sx={{border:'1px #595959 solid',backgroundColor:'#262626',padding:'20px',borderRadius:'20px',color:'#fff'}}>
      <Typography sx={{fontSize:'25px'}}>Soft Skills</Typography>
      <Box sx={{fontSize:'15px',color:' #a6a6a6',lineHeight:'4px'}}>
        <Typography>Photography</Typography>
        <Typography>Adobe Premier Pro</Typography>
      </Box>
      </Stack>

    </Box>
    {/* end stack 3 */}

    </Stack>
    </Layout>

    </>
  )
}

export default About;