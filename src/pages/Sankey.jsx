import { Box } from "@mui/material";
import {  Header, SankeyChart, UsePageTitle } from "../components";

const Sankey = () => {
  UsePageTitle("Sunkey Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Sunkey Chart" />
      <Box height="75vh">
        <SankeyChart />
      </Box>
    </Box>
  );
};

export default Sankey;
