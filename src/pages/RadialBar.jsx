import { Box } from "@mui/material";
import { Header, RadialBarChart, UsePageTitle } from "../components";

const RadialBar = () => {
  UsePageTitle("RadialBar Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple RadialBar Chart" />
      <Box height="75vh">
        <RadialBarChart />
      </Box>
    </Box>
  );
};

export default RadialBar;
