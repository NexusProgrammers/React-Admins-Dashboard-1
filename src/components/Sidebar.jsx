import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Avatar from "../assets/Avatar.jfif";
import AnchorRoundedIcon from "@mui/icons-material/AnchorRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import CropOriginalRoundedIcon from "@mui/icons-material/CropOriginalRounded";
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import AddRoadRoundedIcon from '@mui/icons-material/AddRoadRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Link to={to} style={{ textDecoration: "none" }}>
          <Typography>{title}</Typography>
        </Link>
      </MenuItem>
    </>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [dataExpanded, setDataExpanded] = useState(true);
  const [pagesExpanded, setPagesExpanded] = useState(true);
  const [chartsExpanded, setChartsExpanded] = useState(true);

  const handleDataToggle = () => {
    setDataExpanded(!dataExpanded);
  };

  const handlePagesToggle = () => {
    setPagesExpanded(!pagesExpanded);
  };

  const handleChartsToggle = () => {
    setChartsExpanded(!chartsExpanded);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${
            theme.palette.mode === "dark"
              ? colors.primary[800]
              : colors.primary[400]
          } !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${
            theme.palette.mode === "dark" ? "#868dfb" : "#000000"
          } !important`,
        },
        "& .pro-menu-item.active": {
          color: `${
            theme.palette.mode === "dark" ? "#6870fa" : "#000000"
          } !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admins
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={Avatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jawad
                </Typography>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Dashboard
                  </Typography>
                </Link>
              </Box>
            </Box>
          )}

          <SubMenu
            label="Data"
            icon={<HomeOutlinedIcon />}
            expanded={dataExpanded}
            onToggle={handleDataToggle}
          >
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>

          <SubMenu
            label="Pages"
            icon={<CalendarTodayOutlinedIcon />}
            expanded={pagesExpanded}
            onToggle={handlePagesToggle}
          >
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>

          <SubMenu
            label="Charts"
            icon={<BarChartOutlinedIcon />}
            expanded={chartsExpanded}
            onToggle={handleChartsToggle}
          >
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Chord Chart"
              to="/chord"
              icon={<AnchorRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="CirclePacking Chart"
              to="/circlepacking"
              icon={<DonutLargeRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="AreaBump Chart"
              to="/areabump"
              icon={<CropOriginalRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Stream Chart"
              to="/stream"
              icon={<StreamRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar Chart"
              to="/calendarchart"
              icon={<CalendarMonthRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Radar Chart"
              to="/radarchart"
              icon={<TrackChangesRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Voronoi Chart"
              to="/voronoichart"
              icon={<BlurOnRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="TreeMap Chart"
              to="/treemapchart"
              icon={<AddRoadRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SunBurst Chart"
              to="/sunburstchart"
              icon={<WbSunnyRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SankeyChart Chart"
              to="/sankeychart"
              icon={<Brightness5RoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SwarmPlot Chart"
              to="/swarmplotchart"
              icon={<SwapHorizontalCircleRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Marimekko Chart"
              to="/marimekkochart"
              icon={<SummarizeRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bump Chart"
              to="/bumpchart"
              icon={<LibraryBooksRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
