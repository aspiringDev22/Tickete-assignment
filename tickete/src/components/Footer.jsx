import React from "react";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const footerBoxStyles = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "1rem",
  fontSize: "14px",
  marginTop: "2rem",
  width: "102%",
  overFlow:'hidden'
};

const footerHeader = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "Open Sans",
};

const footerSubBoxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const socialsBoxStyles = {
  display: "flex",
  paddingTop: "20px",
  gap: "15px",
  marginRight: '1.5rem',
};

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  return (
    <Box sx={footerBoxStyles}>
      <Container>
        <Typography sx={{...footerHeader,
        fontSize:isMobile?"30px":"24px",
        padding:isMobile?"2rem 0rem":"3rem",
        }}>tickete</Typography>
        {isMobile ? <hr style={{ width: "100%", marginLeft: "0px",display:"none" }} />:<hr style={{ width: "100%", marginLeft: "0px" }} /> }
        
        <Box sx={footerSubBoxStyles}>
          <Box display={isMobile ? "block" : "flex"} paddingTop="20px" gap="15px">
            <Typography>&copy; Tickete.Inc.</Typography>
            <Typography> • Privacy</Typography>
            <Typography> • Terms</Typography>
            <Typography> • Cancellation Policy</Typography>
          </Box>
          <Box sx={socialsBoxStyles}>
            <AiFillInstagram size={isMobile ? "24" : "20"} />
            <AiFillFacebook size={isMobile ? "24" : "20"} />
            <AiOutlineTwitter size={isMobile ? "24" : "20"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
