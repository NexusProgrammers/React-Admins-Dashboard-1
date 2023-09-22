import { Box } from "@mui/material";
import { Header, StreamChart, UsePageTitle } from "../components";

const Stream = () => {
  UsePageTitle("Stream Chart");
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Stream Chart" />
      <Box height="75vh">
        <StreamChart />
      </Box>
    </Box>
  );
};  

export default Stream;
