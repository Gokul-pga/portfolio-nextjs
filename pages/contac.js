import Layout from "@/components/Layout";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsTelephoneInbound } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";

function contac() {
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = inputdata;
  const [validator, setValidator] = useState(false);

  const Handlesubmit = () => {
    if ((name !== "" && email !== "", subject !== "", message !== "")) {
      setValidator(false);
      setInputdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.log(inputdata);
    } else {
      setValidator(true);
    }
  };

  return (
    <>
      <Layout>
        <Stack
          sx={{
           //bgcolor:'red',

            display: "flex",
            width: "100%",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            justifyContent: "space-around",
          }}
        >
          <Box
            gap={3}
            sx={{
              //bgcolor:'yellow',
              display: "flex",
              flexDirection: "column",
              padding: {
                xl: "10px 0 10px 0",
                lg: "10px 0 10px 0",
                md: "20px 0 10px 20px",
                sm: "20px 0 10px 20px",
                xs: "20px 0 10px 20px",
              },
            }}
          >
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <MdOutlineMailOutline />
                </Box>
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsTelephoneInbound />
                </Box>
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <GoLocation />
                </Box>
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
                sx={{
                  flexDirection: "row",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "300px",
                  },
                  justifyContent: "space-around",
                }}
                className="animate__animated animate__slideInLeft"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsWhatsapp />
                  <Typography>Whatsapp</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <BsInstagram />
                  <Typography>Instagram</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    color: "#fff",
                  }}
                >
                  <SiLinkedin />
                  <Typography>Linkedin</Typography>
                </Box>
              </Stack>
            </Stack>
            {/* Social Info end */}
          </Box>

          <Stack
            className="animate__animated animate__zoomIn"
            sx={{
              width: {
                xl: "600px",
                lg: "600px",
                md: "90%",
                sm: "90%",
                xs: "90%",
              },
              backgroundImage:
                "linear-gradient(to right bottom,#f2f2f2,#cccccc)",
              color: "#6699ff",
              borderRadius: "20px",
              margin: {
                xl: "10px 0 10px 0",
                lg: "10px 0 10px 0",
                md: "20px 0 10px 20px",
                sm: "20px 0 10px 20px",
                xs: "20px 0 10px 20px",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "30px",
                fontSize: {
                  xl: "30px",
                  lg: "30px",
                  md: "30px",
                  sm: "25px",
                  xs: "25px",
                },
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                padding: "20px",
                color: "#000000",
              }}
            >
              Let's Start With
              <span style={{ color: "#4d79ff" }}>Together.</span>
            </Typography>
            {validator && (
              <Typography sx={{ color: "#ff0000", fontSize: "20px", padding:'0 0 0 30px' }}>
                * All fields are mandatory
              </Typography>
            )}
            <Box
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0 30px 30px 30px",
                color: "#fff",
              }}
            >
              <TextField
                sx={{ color: "#fff" }}
                id="outlined"
                variant="standard"
                label="Name"
                value={name}
                onChange={(e) => {setInputdata({...inputdata,name:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => {setInputdata({...inputdata,email:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Subject"
                value={subject}
                onChange={(e) => {setInputdata({...inputdata,subject:e.target.value})}}
              />
              <TextField
                id="outlined-controlled"
                variant="standard"
                label="Message"
                value={message}
                onChange={(e) => {setInputdata({...inputdata,message:e.target.value})}}
              />
              <Button
                variant="contained"
                onClick={() => {
                  Handlesubmit();
                }}
              >
                send message
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
}

export default contac;
