import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  styled,
  useMediaQuery
} from "@mui/material";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import data from "../accordionData";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  borderBottom:'1px solid #e3e3e3',
  padding:'10px',
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0",
  },
}));

const accordionTitle = {
  fontSize: "18px",
  fontWeight: "550",
  color: "#595959",
};

const accordionInfo = {
  fontSize: "12px",
  color: "rgb(71,71,71)",
};

const faqHeader = {
  fontSize: "24px",
  fontWeight: "600",
  color: "rgb(71,71,71)",
  marginBottom: "15px",
};

const FaqSection = () => {
  const [questions, setQuestions] = useState(data);
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box maxWidth sx={{ marginTop: "50px", width: isMobile?"100%":"67%" }}>
      <Typography sx={faqHeader}>Frequently asked questions</Typography>
      {questions.map((question) => (
        <CustomAccordion key={question.id} onChange={handleAccordionChange(question.id)} style={{width:isMobile?"100%":"90%"}}>
          <AccordionSummary
         expandIcon={
          expanded === question.id ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus />
          )
        }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={accordionTitle}>{question.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={accordionInfo}>{question.info}</Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </Box>
  );
};

export default FaqSection;
