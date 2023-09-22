import { Box } from "@mui/material";
import { Header, TreeMapChart, UsePageTitle } from "../components";

const TreeMap = () => {
  UsePageTitle("TreeMap Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple TreeMap Chart" />
      <Box height="75vh">
        <TreeMapChart />
      </Box>
    </Box>
  );
};

export default TreeMap;
