import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  AreaBump,
  Bar,
  Bump,
  Calendar,
  Chord,
  CirclePacking,
  Contacts,
  Dashboard,
  Faq,
  ForCalendar,
  Form,
  Geography,
  Invoices,
  Line,
  Marimekko,
  Pie,
  Radar,
  RadialBar,
  Sankey,
  SunBurst,
  SwarmPlot,
  Team,
  TreeMap,
  Voronoi,
} from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { Sidebar, StreamChart, Topbar } from "./components";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/chord" element={<Chord />} />
              <Route path="/circlepacking" element={<CirclePacking />} />
              <Route path="/areabump" element={<AreaBump />} />
              <Route path="/stream" element={<StreamChart />} />
              <Route path="/calendarchart" element={<ForCalendar />} />
              <Route path="/radarchart" element={<Radar />} />
              <Route path="/voronoichart" element={<Voronoi />} />
              <Route path="/treemapchart" element={<TreeMap />} />
              <Route path="/sunburstchart" element={<SunBurst />} />
              <Route path="/sankeychart" element={<Sankey />} />
              <Route path="/sankeychart" element={<Sankey />} />
              <Route path="/swarmplotchart" element={<SwarmPlot />} />
              <Route path="/marimekkochart" element={<Marimekko />} />
              <Route path="/bumpchart" element={<Bump />} />
              <Route path="/radialbarchart" element={<RadialBar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
