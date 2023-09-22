import { Box } from "@mui/material";
import { Header, SwarmPlotChart, UsePageTitle } from "../components";

const SwarmPlot = () => {
  UsePageTitle("SwarmPlot Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple SwarmPlot Chart" />
      <Box height="75vh">
        <SwarmPlotChart />
      </Box>
    </Box>
  );
};

export default SwarmPlot;
