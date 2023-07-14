import React from "react";
import { TextField } from "@mui/material";

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root": {
    color: "black", 
   },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& fieldset": {
      borderColor: "black",
    },
  },
};


const CustomInputField = ({ label, type, value, onChange, name }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      fullWidth
      sx={inputStyles}
      // input={<PhoneInput />}
      InputProps={{
        sx: {
          borderRadius: "1.1rem",
          "& .Mui-focused fieldset": {
            borderColor: "black",
          },
        },
      }}
    />
  );
};

export default CustomInputField;
