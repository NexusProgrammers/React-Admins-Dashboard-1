import { Box } from "@mui/material";
import { BarChart, Header, UsePageTitle } from "../components";

const Bar = () => {
  UsePageTitle("Bar Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
