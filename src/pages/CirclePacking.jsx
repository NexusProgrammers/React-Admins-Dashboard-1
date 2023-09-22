import { Box } from "@mui/material";
import {  CirclePackingChart, Header, UsePageTitle } from "../components";

const CirclePacking = () => {
  UsePageTitle("CirclePacking Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Circle Packing Chart" />
      <Box height="75vh">
        <CirclePackingChart />
      </Box>
    </Box>
  );
};

export default CirclePacking;
