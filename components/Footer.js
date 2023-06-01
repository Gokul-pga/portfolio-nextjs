import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  const FootArray = [
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
      to: "/contac",
    },
  ];

  return (
    <>
      <Stack sx={{ flexDirection: "column", width: "100%", mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#fff",
            justifyContent: "space-around",
            fontSize: "20px",
          }}
        >
          GokulAnand
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          {FootArray.map((item, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                onClick={() => {
                  router.push(item.to);
                }}
                sx={{ color: "#4d4d4d",
                "&:hover":{
                    color: "#fff",
                  },
             }}
              >
                {item.title}
              </Button>
            );
          })}
        </Box>
      </Stack>
    </>
  );
}

export default Footer;
