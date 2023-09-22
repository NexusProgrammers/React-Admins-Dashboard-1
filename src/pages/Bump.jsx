import { Box } from "@mui/material";
import { BumpChart, Header, UsePageTitle } from "../components";

const Bump = () => {
  UsePageTitle("Bump Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bump Chart" />
      <Box height="75vh">
        <BumpChart />
      </Box>
    </Box>
  );
};

export default Bump;
