import { Box } from "@mui/material";
import { CalendarChart, Header, UsePageTitle } from "../components";

const ForCalendar = () => {
  UsePageTitle("Calender Chart");
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Calender Chart" />
      <Box height="75vh">
        <CalendarChart />
      </Box>
    </Box>
  );
};

export default ForCalendar;
