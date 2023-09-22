import { Box } from "@mui/material";
import { Header, UsePageTitle } from "../components";
import LineChart from "../components/LineChart";

const Line = () => {
  UsePageTitle("Line Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
