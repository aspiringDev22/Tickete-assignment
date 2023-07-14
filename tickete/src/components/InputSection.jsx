import {
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  Checkbox,
  Button,
  useMediaQuery
} from "@mui/material";
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CgRadioCheck, CgRadioChecked } from "react-icons/cg";
import { PiShieldCheckeredFill } from "react-icons/pi";
import CustomInputField from "./CustomInputField";
import klarnaImg from "../assets/Klarna.png";

const inputContainerStyles = {
  padding: "40px",
  color: "rgb(71,71,71)",
  borderRight: "1px solid #e3e3e3",
};

const mainHeaderStyles = {
  color: "inherit",
  fontWeight: "600",
  fontFamily: "Open Sans",
  letterSpacing: "-0.02em",
};

const detailsGridStyles = {
  marginTop: "-15px",
  padding: "20px 0px 40px 0px",
};

const subHeaderStyles = {
  fontSize: "24px",
  color: "inherit",
  fontWeight: "600",
};

const termsSpanStyles = {
  color: "#1733b6",
  fontSize: "14px",
  display: "inline",
  cursor: "pointer",
};

const confirmButtonStyles = {
  alignSelf: "flex-start",
  background: "black",
  padding: "15px",
  textTransform: "capitalize",
  transition: "all 0.2s ease",
  textAlign: "center",
  "&:hover": {
    background: "black",
  },
  "&:active": {
    background: "black",
  },
};

const dropwDownStyles = {
  "& .MuiInputLabel-root": { color: "black" },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "black",
    },
  },
};

const inputStyles = {
  borderRadius: "1.1rem",
  padding: "18px",
  textTransform: "capitalize",
  border: "1px solid #d5d5d5",
  fontSize:'16px'
};


const InputSection = () => {
  const [fullname, setFullName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [valid, setValid] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name);
    console.log("value:", value);
    switch (name) {
      case "name":
        setFullName(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "confirmEmail":
        setConfirmEmail(value);
        break;
      case "dropdownValue":
        setDropdownValue(value);
        break;
      case "secondName":
        setSecondName(value);
        break;
      case "cardName":
        setCardName(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardDate":
        setCardDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={inputContainerStyles}>
      <Typography sx={{mainHeaderStyles,fontSize:isMobile?"44px":"48px"}}>Confirm and pay</Typography>
      <Grid
        container
        direction="column"
        spacing={6}
        sx={{ paddingTop: "60px" }}
      >
        <Grid item>
          <Typography sx={subHeaderStyles}>
            Your details
            <span style={{ fontWeight: "400" }}>
              We'll be sending your tickets to the details below. Booking for a
              friend? Add their details
            </span>{" "}
          </Typography>
          <Grid container spacing={3} sx={detailsGridStyles}>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Full Name"
                type="text"
                name="name"
                value={fullname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <CustomInputField
                label="Phone Number"
                type="number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
              /> */}
           <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
          inputStyle={{border:'none',width:'100%'}}
          buttonStyle={{background:'none',border:'none'}}
        />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Confirm Email"
                type="email"
                name="confirmEmail"
                value={confirmEmail}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography sx={subHeaderStyles}>
            Additional Information
            <span style={{ fontWeight: "400" }}>
              We need a few more details to complete your reservation.
            </span>{" "}
          </Typography>
          <Grid container spacing={3} sx={detailsGridStyles}>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Second Name"
                type="text"
                name="secondName"
                value={secondName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Dropdown"
                select
                value={dropdownValue}
                onChange={handleInputChange}
                fullWidth
                name="dropdownValue"
                sx={dropwDownStyles}
                InputProps={{ sx: { borderRadius: "1.1rem" } }}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography sx={subHeaderStyles}>
            Select your mode of payment{" "}
            <span style={{ fontWeight: "400" }}>
              Payments with Tickete are secure and encrypted
            </span>{" "}
          </Typography>
          <Grid container spacing={3} sx={detailsGridStyles}>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Name on Card"
                type="text"
                name="cardName"
                value={cardName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Card Number"
                type="number"
                name="cardNumber"
                value={cardNumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="Expiry Date"
                type="text"
                name="cardDate"
                value={cardDate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInputField
                label="CVV"
                type="number"
                name="cvv"
                value={cvv}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid item sx={{ padding: "10px" }} md={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap="10px">
              <img src={klarnaImg} alt="klarna image" />
              <Typography fontSize="18px">Klarna</Typography>
            </Box>
            <Checkbox
              icon={<CgRadioCheck size="25" />}
              checkedIcon={<CgRadioChecked size="25" />}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" flexDirection="column" gap="20px">
            <Typography sx={subHeaderStyles} marginBottom="30px">
              Total: {"<"}price{">"}{" "}
              <span style={{ fontSize: "12px", textDecoration: "underline" }}>
                You will pay in {"<"}currency{">"}
              </span>
            </Typography>
            <Typography
              fontSize="17px"
              sx={{
                background: "#f5f5f5",
                padding: "7px",
                borderRadius: "10px",
                width: "90%",
              }}
            >
              {" "}
              <Checkbox
                icon={<CgRadioCheck size="14" />}
                checkedIcon={<CgRadioChecked size="14" />}
              />{" "}
              Receive travel tips, suggestions and offers in {"<"}city{">"} by
              email
            </Typography>
            <Typography fontSize="14px" color="rgb(71,71,71)">
              With payment, you agree to the general{" "}
              <span style={termsSpanStyles}>
                terms and conditions of Tickete & the activity provider.
              </span>
            </Typography>
            <Button sx={confirmButtonStyles} variant="contained">
              <Typography marginRight="10px">Confirm and pay</Typography>{" "}
              <PiShieldCheckeredFill color="white" size="15" />{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputSection;
