import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from 'next/router'


export default function NavBar() {
  const router =useRouter()


  

  const NavArray = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Works",
      to: "/works",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <Stack
        flexDirection="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "20px",
        }}
      >
        <Box sx={{display:{
              xl:"block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none"}}}>
          <Typography sx={{ fontSize: "25px", color: "#fff" }}>
            PortFolio
          </Typography>
        </Box>

<Box  sx={{display:{
            xl:"block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none"},
            width: "70%",
        }}>
        <Stack
        direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            padding: 3
          }}
        >
          <Stack
            sx={{
              flexDirection:'row',            
              width: "70%",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#fff"
            }}
          >
            {NavArray.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    router.push(item.to)
                  }}
                  sx={{
                    color: "#4d4d4d",
                    "&:hover": {
                      boxShadow: "0px 3px 5px 3px #0099e6",
                      color: "#fff",
                    },
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
          </Stack>
          <Box>
            <Button  sx={{ backgroundColor: "grey", color: "#fff" }}>
              Lets Talk!
            </Button>
            
          </Box>
        </Stack>
        </Box>
      </Stack>
    </>
  );
}
