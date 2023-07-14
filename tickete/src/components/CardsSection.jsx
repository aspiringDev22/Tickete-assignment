import React from 'react';
import { Box, Typography, Card, useMediaQuery } from '@mui/material';
import { BsPatchCheckFill, BsStars } from 'react-icons/bs';
import { PiChatsTeardropFill, PiShieldStarFill } from 'react-icons/pi';

const cardsBoxStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '2rem',
  gap: '15px',
  marginLeft: '1rem',
};

const cardsStyles = {
  width: '350px',
  height: '220px',
  borderRadius: '8px',
  boxShadow: 'none',
  border: '1px solid #d6d6d6',
  padding: '10px',
};

const insideCardStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '10px',
  justifyContent: 'space-between',
  height: '100%',
};

const CardSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const cardData = [
    {
      icon: <BsPatchCheckFill color="rgb(0,130,83)" size="46" />,
      title: 'Quality first. and second.',
      text: 'Endless possibilities at incredible prices without compromising quality',
    },
    {
      icon: <PiShieldStarFill color="#b9017a" size="46" />,
      title: 'Stay flexible and spontaneous',
      text: 'Flexible cancellation, multiple payment options & last minute availability',
    },
    {
      icon: <BsStars color="#ecaa01" size="46" />,
      title: 'Travel made delightful',
      text: 'Book stress-free with easy cancellation',
    },
    {
      icon: <PiChatsTeardropFill color="#7f2d0f" size="46" />,
      title: "We've got your back",
      text: "Change of plans? Got queries? We're here to help, 24*7",
    },
  ];

  return (
    <Box sx={{ padding: '4.4rem 0' }}>
      <Typography fontSize="24px" fontWeight="600" color="rgb(71,71,71)">
        The Tickete Promise
      </Typography>
      <Box
        sx={{
          ...cardsBoxStyles,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {cardData.map((card, index) => (
          <Card key={index} sx={cardsStyles}>
            <Box sx={insideCardStyles}>
              <Box
                sx={{
                  marginRight: '0.5rem',
                  alignSelf: 'flex-start',
                  fontSize: '24px',
                }}
              >
                {card.icon}
              </Box>
              <Box>
                <Typography fontSize="16px" component="div">
                  {card.title}
                </Typography>
                <Typography fontSize="15px" color="text.secondary">
                  {card.text}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CardSection;
