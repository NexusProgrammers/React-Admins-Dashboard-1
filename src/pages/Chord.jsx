import { Box } from "@mui/material";
import { ChordChart, Header, UsePageTitle } from "../components";

const Chord = () => {
  UsePageTitle("Chord Chart");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Chord Chart" />
      <Box height="75vh">
        <ChordChart />
      </Box>
    </Box>
  );
};

export default Chord;
