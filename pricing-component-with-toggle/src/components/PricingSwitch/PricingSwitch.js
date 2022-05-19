import { Box } from "@mui/system";
import { Typography, Button, Switch, Grid } from "@mui/material";
import React from "react";

const PricingSwitch = ({ pricing, setPricing }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>Our Pricing</Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography>Annually</Typography>
        <Switch
          onChange={(e, checked) =>
            setPricing(checked ? "monthly" : "annually")
          }
          value={pricing}
        />
        <Typography>Monthly</Typography>
      </Grid>
    </Grid>
  );
};

export default PricingSwitch;
