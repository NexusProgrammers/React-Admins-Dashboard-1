import { Box } from "@mui/material";
import { Header, UsePageTitle } from "../components";
import PieChart from "../components/PieChart";

const Pie = () => {
  UsePageTitle("Pie Chart");
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
