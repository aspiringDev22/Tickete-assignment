import React from "react";
import {  Grid, Box, Card, Button, Typography,useMediaQuery } from "@mui/material";
import AsideSection from "./AsideSection";
import InputSection from "./InputSection";
import FaqSection from "./FaqSection";
import CardsSection from "./CardsSection";
import Footer from "./Footer";
import { PiChatsTeardropFill } from "react-icons/pi";

const dashboardBoxStyles = {
  height: "100%",
  width: "100%",
};

const chatCardStyles = {
  width: "380px",
  height: "200px",
  borderRadius: "15px",
  boxShadow: "none",
  background: "#fff7ed",
  padding: "10px",
}

const chatCardButton = {
  alignSelf: "flex-start",
  borderColor: "#7f2d0f",
  color: "#7f2d0f",
  textTransform: "capitalize",
  borderRadius: "10px",
  padding: "10px 15px",
  fontSize: "16px",
  marginLeft: "10px",
  "&:hover": {
    borderColor: "#7f2d0f",
    color: "#7f2d0f",
    },
    "&:active": {
      color: "#fff7ed",
      background:'#7f2d0f' 
    },
}

const faqAndCardsBox = {
  display:"flex" ,
  flexDirection:"column",
   minHeight:"100vh",
   padding:'40px'
}

const Dashboard = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  return (
    <>
      <Box sx={dashboardBoxStyles}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} sm={7} md={8}>
            <InputSection />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <AsideSection />
          </Grid>
        </Grid>
        <hr style={{marginLeft:'20px',width:'95%'}}/>
        <Box sx={faqAndCardsBox}>
          <Box display="flex" flexDirection={isMobile?"column":"row"}>
            <FaqSection />
            <Card
              sx={{...chatCardStyles,margin:isMobile?"40px 40px 40px 0px":"60px 0p 0px 40px"}}
            >
              <Box
                display="flex"
                flexDirection="column"
                padding="20px 20px"
                gap="40px"
              >
                <Box display="flex" justifyContent="space-around">
                  <Typography fontSize="18px" color="#7f2d0f">
                    Need help?{" "}
                    <span>
                      We're here to help you, talk to us.
                    </span>
                  </Typography>
                  <PiChatsTeardropFill color="#7f2d0f" size="46" />
                </Box>
                <Button
                  variant="outlined"
                  sx={chatCardButton}
                >
                  Chat with us
                </Button>
              </Box>
            </Card>
          </Box>
          <CardsSection />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;
