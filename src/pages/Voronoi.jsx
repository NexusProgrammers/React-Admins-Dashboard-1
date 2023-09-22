import { Box } from "@mui/material";
import { Header, UsePageTitle, VoronoiChart } from "../components";

const Voronoi = () => {
  UsePageTitle("Voronoi Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Voronoi Chart" />
      <Box height="75vh">
        <VoronoiChart />
      </Box>
    </Box>
  );
};

export default Voronoi;
