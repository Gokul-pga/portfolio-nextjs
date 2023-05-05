import React from "react";
import Layout from '@/components/Layout';
import {Box,Button,CardMedia,Stack,TextField,Typography,} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import whatsapp from "@/assests/whatsapp.png";
import github from "@/assests/github.png";
import instagram from "@/assests/instagram.png";

function Contact() {
  return (
    <>
      <Layout>
        <Box
          gap={3}
          sx={{
            margin:{xl:"30px 60px 0 60px",lg:"30px 60px 0 60px",md:"30px 60px 0 60px",sm:"30px 60px 0 60px",xs:"30px 60px 0 60px"},
            display: "flex",
            flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'},
            justifyContent:{xl:'space-around',lg:'space-around',sm:'space-around',md:'space-around',xs:'space-around'}
          }}
        >
          <Box gap={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              className="animate__animated animate__zoomIn"
              sx={{ color: "#b3b3b3", fontSize: "25px" }}
            >
              Contact Info
            </Typography>

            {/* start stack 1 */}
            <Box
              gap={4}
              sx={{ display: "flex", flexDirection: "column" }}
              className="animate__animated animate__slideInLeft"
            >
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <EmailOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    MAIL US
                  </Typography>
                  <Typography>gokulanand2508@gmail.com</Typography>
                  <Typography>gokulsara2508@gmail.com</Typography>
                </Box>
              </Stack>
              {/* end stack 1 */}

              {/* start stack 2 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <LocalPhoneOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    CONTACT US
                  </Typography>
                  <Typography>+91 9500593141</Typography>
                  <Typography>+91 9843469962</Typography>
                </Box>
              </Stack>
              {/* end stack 2 */}

              {/* start stack 3 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <RoomOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:"linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="#4d4d4d" fontWeight="bold">
                    LOCATION
                  </Typography>
                  <Typography>Pudhu Road</Typography>
                  <Typography>Sathyamangalam</Typography>
                </Box>
              </Stack>
            </Box>
            {/* end stack 3 */}

            {/* Social Info Start */}
            <Stack gap={3} sx={{ flexDirection: "column" }}>
              <Typography
                className="animate__animated animate__zoomIn"
                sx={{ color: "#b3b3b3", fontSize: "25px" }}
              >
                Social Info
              </Typography>
              <Stack
                gap={4}
                sx={{ flexDirection: "row",width:{xl:'300px',lg:'300px',md:'550px',sm:'550px',xs:'550px'},justifyContent:'space-around' }}
                className="animate__animated animate__slideInLeft"
              >
                <CardMedia
                  image={whatsapp}
                  sx={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                  }}
                />
                <CardMedia
                  image={github}
                  sx={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                  }}
                />
                <CardMedia
                  image={instagram}
                  sx={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                  }}
                />
              </Stack>
            </Stack>
            {/* Social Info end */}
          </Box>

          <Stack
          className="animate__animated animate__bounceInRight"
            sx={{
              width:{xl:"600px",lg:"600px",md:'100%',sm:'100%',xs:'100%'},
              backgroundImage:"linear-gradient(to right bottom,#1a1a1a,#4d4d4d)",
              color: "#6699ff",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                padding: "20px",
                color: "#fff",
              }}
            >
              Let's Start With <span style={{color:'#4d79ff'}}>Together.</span>
            </Typography>
            <Box
              gap={2}
              sx={{ display: "flex", flexDirection: "column", padding: "30px",color:'#6699ff' }}
            >
              <TextField sx={{color:'#fff'}} id="outlined" variant="standard" label="Name"  />
              <TextField id="outlined-controlled" variant="standard" label="Email" />
              <TextField id="outlined-controlled" variant="standard" label="Subject" />
              <TextField id="outlined-controlled" variant="standard" label="Message" />
              <Button variant="outlined">send message</Button>
            </Box>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}

export default Contact;
