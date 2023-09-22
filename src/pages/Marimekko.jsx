import { Box } from "@mui/material";
import { Header, MarimekkoChart, UsePageTitle } from "../components";

const Marimekko = () => {
  UsePageTitle("Marimekko Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Marimekko Chart" />
      <Box height="75vh">
        <MarimekkoChart />
      </Box>
    </Box>
  );
};

export default Marimekko;
