import React from "react";
import { Box, Divider, Typography, Button, Paper } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

const Professional = ({ price }) => {
  return (
    <Paper elevation={12}>
      <Box>
        <Box>Professional</Box>
        <Box>{price}</Box>
        <Divider />
        <Typography> 1TB Storage</Typography>
        <Divider />
        <Typography> 5 Users Allowed</Typography>
        <Divider />
        <Typography>Send up to 10 Gb</Typography>
        <Divider />
      </Box>
      <Box>
        <Button sx={{ border: "1px solid" }}>Learn More</Button>
      </Box>
    </Paper>
  );
};

export default Professional;

// Professional
// &dollar;24.99
// &dollar;249.99
// 1 TB Storage
// 5 Users Allowed
// Send up to 10 GB
// Learn More
