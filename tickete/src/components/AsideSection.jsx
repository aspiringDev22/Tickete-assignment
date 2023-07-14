import React from "react";
import { Box, Grid, Typography,useMediaQuery } from "@mui/material";
import amsterdamImg1 from "../assets/amsterdam1.png";
import {
  PiTicketFill,
  PiCalendarBlankFill,
  PiClockFill,
  PiTagFill,
} from "react-icons/pi";

const asideBoxStyles = {
  height:'100%',
  color:'rgb(71,71,71)',
  paddingTop:'40px',
}

const asideHeaderStyles = {
fontSize:'18px',
color:'inherit',
padding:'5px 0px',
width:'90%',
fontWeight:'600'
}

const variantStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "10px",
}

const variantBoxStyles = {
  display:"flex",
  alignItems:"center",
  gap:'20px',
   color:"inherit",
}

const ticketsStyles = {
  display:"flex",
   width:"80%",
  justifyContent:"space-between"
}

const hrTagStyles ={
  width:'80%',
  marginLeft:'30px'
}
 

const AsideSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  return (
    <Box sx={{...asideBoxStyles,padding:isMobile?"40px 0px 30px 40px":'40px 0px'}}>
      <Grid container direction="column" spacing={2}>
        <Grid item sx={{ padding: "10px" }}>
          <img src={amsterdamImg1} />
          <Typography sx={asideHeaderStyles}>
            Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk
            House
          </Typography>
          <Box
            sx={variantStyles}
          >
            <Box sx={variantBoxStyles}>
              <PiTicketFill size="24" />
              <Typography fontSize="16px" fontWeight="500">
                Variant Name
              </Typography>
            </Box>
            <Box sx={variantBoxStyles}>
              <PiCalendarBlankFill size="24" />
              <Typography fontSize="16px" fontWeight="500">
                Date
              </Typography>
            </Box>
            <Box sx={variantBoxStyles}>
              <PiClockFill size="24" />
              <Typography fontSize="16px" fontWeight="500">
                Time
              </Typography>
            </Box>
          </Box>
        </Grid>
        <hr style={hrTagStyles}/>
        <Grid item>
          <Typography fontWeight="600">Tickets overview</Typography>
          <Box sx={ticketsStyles}>
            <Typography>
              {"<"}pax type{">"}
            </Typography>
            <Typography>
              {"<"}price{">"}
            </Typography>
          </Box>
          <Box sx={ticketsStyles}>
            <Typography>
              {"<"}pax type{">"}
            </Typography>
            <Typography>
              {"<"}price{">"}
            </Typography>
          </Box>
          <Box sx={ticketsStyles}>
            <Typography>
              {"<"}fee{">"}
            </Typography>
            <Typography>
              {"<"}price{">"}
            </Typography>
          </Box>
          <Box sx={ticketsStyles}>
            <Typography color="green">
              {"<"}discount applied{">"}
            </Typography>
            <Typography color="green">
              {"<"}--price{">"}
            </Typography>
          </Box>
        </Grid>
        <hr style={hrTagStyles}/>
        <Grid item sx={{ padding: "20px 0" }}>
          <Box display="flex" alignItems="center" gap="15px">
            <PiTagFill color="green"/>
            <Typography sx={{ textDecoration: "underline" ,color:"green"}}>
              Have a promo code?
            </Typography>
          </Box>
        </Grid>
        <hr style={hrTagStyles}/>
        <Grid item>
          <Box>
            <Box display="flex" justifyContent="space-between" width="80%">
              <Typography fontWeight="bold">
                Total{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight:'400'
                  }}
                >
                  You will pay in {"<"}currency{">"}
                </span>
              </Typography>
              <Typography>
                {"<"}price{">"}
              </Typography>
            </Box>
            <Typography
              sx={{
                padding: "10px",
                background: "rgb(245,245,245)",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              Free cancellation
              <span style={{ display: "block", fontSize: "14px" }}>
                Cancel before {"<"}date{">"} for a full refund
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AsideSection;
