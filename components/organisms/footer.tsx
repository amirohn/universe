import { Box } from "@mui/material";
import React, { Component } from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        minHeight: "5rem",
        width: "100%",
        background: "#e9f5f8",
        borderTop: "1px solid #dfdbdb",
        position: "absolute",
        bottom: 0,
      }}></Box>
  );
}
