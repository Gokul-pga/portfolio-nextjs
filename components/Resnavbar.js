import { Box, Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

function Resnavbar() {

const router =useRouter()
const [open, setOpen] = useState(false)
const handleClose = () =>{
    setOpen(false)
}

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
    <Stack direction='column'  sx={{
        display:{
            xl:"none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block"},
            display:'flex',
            width:'100%',
            marginTop:'0',
            position:'relative'

    }}>

    <Stack sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:'0 15px 0 15px',
                backgroundColor:'#0d0d0d',
                zIndex:'1001',
                position:'relative'
                }}>
    <Box sx={{
         display:{
            xl:"none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block"},
            }}>
          <Typography sx={{ fontSize: "25px", color: "#fff",  }}>
            PortFolio
          </Typography>
        </Box>

        <Box sx={{
             display:{
                xl:"none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block"},
            color:'#fff',
            fontSize:'25px',
        }}
        onClick={() => {setOpen((p) => !p)}}>
        <AiOutlineMenu/>
        </Box>
    </Stack>

       { open && <Box onClose={handleClose} className="animate__animated animate__bounceIn" on  sx={{
                display:'flex',
                flexDirection:'column',
                color:'#fff',
                alignItems:'center',
                width:'100%',
                position:'absolute',
                zIndex:'1000',
                backgroundColor: "#0d0d0d",
                borderRadius:'0 0 10px 10px',
                padding: "45px 0 10px 0"
            }}>
                {NavArray.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    router.push(item.to)
                  }}
                  sx={{ display:{
                    xl:"none",
                    lg: "none",
                    md: "none",
                    sm: "block",
                    xs: "block"},
                    color: "#fff",
                   fontSize:'16px'
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
            <Box>
            <Button  sx={{ backgroundColor: "grey", color: "#fff", padding:'5px 15px', display:{
                    xl:"none",
                    lg: "none",
                    md: "none",
                    sm: "block",
                    xs: "block"},}}>
              Lets Talk!
            </Button>
            
          </Box>
            </Box> }  
  </Stack>
    </>
  )
}

export default Resnavbar