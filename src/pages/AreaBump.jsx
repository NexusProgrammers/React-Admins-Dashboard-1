import { Box } from "@mui/material";
import { AreaBumpChart, Header, UsePageTitle } from "../components";

const AreaBump = () => {
  UsePageTitle("Area Bump Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Area Bump Chart" />
      <Box height="75vh">
        <AreaBumpChart />
      </Box>
    </Box>
  );
};

export default AreaBump;
