import React from "react";
import Button from "@mui/material/Button";

const RedButton = ({ handleClick }: any) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "red", color: "blue" }}
      onClick={handleClick}
      style={{ marginLeft: 8 }}
      size="medium"
      // color="secondary"
    >
      Click me
    </Button>
  );
};

export default RedButton;
