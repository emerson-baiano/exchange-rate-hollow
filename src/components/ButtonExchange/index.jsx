import React from "react";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import IconButton from "@mui/material/IconButton";

function ButtonExchange({ onClick }) {
  return (
    <IconButton
      color="primary"
      aria-label="currency exchange button"
      onClick={onClick}
      size="large"
      sx={{
        fontSize: "4rem",
        width: "4rem",
        color: "hsl(238, 69%, 60%)",
      }}
    >
      <ChangeCircleOutlinedIcon fontSize="inherit" />
    </IconButton>
  );
}

export default ButtonExchange;
