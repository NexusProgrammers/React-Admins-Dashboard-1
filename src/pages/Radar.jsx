import { Box } from "@mui/material";
import { Header, RadarChart, UsePageTitle } from "../components";

const Radar = () => {
  UsePageTitle("Radar Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Radar Chart" />
      <Box height="75vh">
        <RadarChart />
      </Box>
    </Box>
  );
};

export default Radar;
