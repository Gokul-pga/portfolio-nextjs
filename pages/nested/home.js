import React from "react";
import Layout from '@/components/Layout';
import { Box, Stack,CardMedia, Typography} from '@mui/material';
import gokul from '@/assests/gokul.jpg'

function Homepage() {
  return (
    <>
      <Layout>
        <Stack  gap={3} margin="30px 60px 0 60px">
         
            <Stack gap={3} sx={{flexDirection:'row',backgroundColor: "#1a1a1a",padding: "20px",width:{xl:'50%',lg:'50%',md:'100%',sm:'100%',xs:'100%'},alignItems:'center',justifyContent:'space-around',borderRadius:'25px'}}>
              <Box
                className="animate__animated animate__zoomInLeft"
                sx={{
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <CardMedia
                  alt="green iguana"
                  image={gokul}
                  sx={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "15px 0 15px 0",
                    border: '3px #4d4d4d solid',
                    padding: "10px",
                    boxShadow:'0px 5px 3px 0px #b3b3b3'
                  }}
                />
              </Box>

              <Box className='animate__animated animate__zoomInRight' gap={3} sx={{
                margin:'35px 0 35px 0',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-around',
              }}>
                <Typography sx={{fontSize:'15px',fontWeight:'bold',color:'#404040'}}>A WEB DEVELOPER</Typography>
                <Box sx={{ display:'flex',flexDirection:'column',alignItems:'center',}}>
                <Typography sx={{fontSize:'30px',fontWeight:'bold',color:'#fff'}}>Gokulanand</Typography>
                <Typography sx={{fontSize:'25px',fontWeight:'bold',color:'#595959'}}>BE - MCT</Typography>
                </Box>
                <Typography sx={{fontSize:'15px',fontWeight:'bold',color:'#404040'}}>I AM A WEB DEVELOPER</Typography>
              </Box>
            </Stack>
          
              <Stack>
                <Box>
                  
                </Box>
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
