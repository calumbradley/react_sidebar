import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <Link to="/">
          <li className="SidebarRow">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="title">Home</div>
          </li>
        </Link>
        <Link to="/analytics">
        <li className="SidebarRow">
          <div className="icon">
            <AnalyticsIcon />
          </div>
          <div className="title">Analytics</div>
        </li>
        </Link>
        <Link to="/data">
        <li className="SidebarRow">
          <div className="icon">
            <PieChartIcon />
          </div>
          <div className="title">Data</div>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
