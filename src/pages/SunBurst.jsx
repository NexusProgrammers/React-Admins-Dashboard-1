import { Box } from "@mui/material";
import { Header, SunBurstChart, UsePageTitle } from "../components";

const SunBurst = () => {
  UsePageTitle("SunBurst Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple SunBurst Chart" />
      <Box height="75vh">
        <SunBurstChart />
      </Box>
    </Box>
  );
};

export default SunBurst;
