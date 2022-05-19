import React from "react";
import { Box, Divider, Typography, Button, Paper } from "@mui/material";

const Master = ({ price, title, storage, users, send }) => {
  return (
    <Paper elevation={12}>
      <Box>
        <Box>{title}</Box>
        <Box>{price}</Box>
        <Divider />
        <Typography>{storage}</Typography>
        <Divider />
        <Typography> {users}</Typography>
        <Divider />
        <Typography>{send}</Typography>
        <Divider />
        <Button sx={{ border: "1px solid" }}>Learn More</Button>
      </Box>{" "}
    </Paper>
  );
};

export default Master;

// Master
// &dollar;39.99
// &dollar;399.99
// 2 TB Storage
// 10 Users Allowed
// Send up to 20 GB
// Learn More
