import logo from "./logo.svg";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import "./App.css";
import Professional from "./components/Professional/Professional";
import Master from "./components/Master/Master";
import PricingSwitch from "./components/PricingSwitch/PricingSwitch";
import { useState } from "react";

function App() {
  const [pricing, setPricing] = useState("monthly");
  return (
    <Container className="App" sx={{ height: "100%", width: "100%" }}>
      <Box>
        <PricingSwitch pricing={pricing} setPricing={setPricing} />
      </Box>
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item sx={{ width: 250, height: 500 }}>
          <Master
            title="Basic"
            storage="500 GB Storage"
            users="2 Users Allowed"
            send="Send up to 3 GB"
            price={pricing === "monthly" ? "19.99" : "199.99"}
          />
        </Grid>
        <Grid item sx={{ width: 250, height: 500 }}>
          <Professional price={pricing === "monthly" ? "24.99" : "249.99"} />
        </Grid>
        <Grid item sx={{ width: 250, height: 500 }}>
          <Master
            title="Master"
            storage="2 TB Storage"
            users="10 Users Allowed"
            send="Send up to 20 GB"
            price={pricing === "monthly" ? "39.99" : "399.99"}
          />
        </Grid>
      </Grid>
      <div class="attribution">
        Coded by <a href="#">Your Name Here</a>
      </div>
    </Container>
  );
}

export default App;

/* <div class="attribution">
  Coded by <a href="#">Your Name Here</a>
</div>; */

// Basic // &dollar;19.99 // &dollar;199.99 // 500 GB Storage // 2 Users
// Allowed // Send up to 3 GB // Learn More // Professional // &dollar;24.99
// &dollar;249.99 // 1 TB Storage // 5 Users Allowed // Send up to 10 GB
// Learn More // Master // &dollar;39.99 // &dollar;399.99 // 2 TB Storage
// 10 Users Allowed // Send up to 20 GB // Learn More
