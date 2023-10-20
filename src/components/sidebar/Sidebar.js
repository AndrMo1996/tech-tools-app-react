import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { sidebarNavItems } from "../../config/data/SidebarNavItems";

import logo from "../../assets/img/logo.svg";
import arrow from "../../assets/img/left-arrow.png";

import "./sidebar.css";

const Sidebar = ({ isActive, setIsActive, setTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setTitle(curPath.length === 0 ? "Home" : sidebarNavItems[activeItem].title);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className={`sidebar ${isActive ? "" : "inactive"}`}>
      <img
        src={arrow}
        className={`arrow ${isActive ? "" : "inactive"}`}
        onClick={() => setIsActive(!isActive)}
      />
      <div className="sidebar-logo">
        <img className="logo-img" src={logo}></img>
        <h2 className={`logo-text ${isActive ? "" : "inactive"}`}>
          Tech Tools
        </h2>
      </div>

      <div className="sidebar-menu">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
            <div
              className={`sidebar-menu-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar-menu-item-icon">{item.icon}</div>
              <div
                className={`sidebar-menu-item-text ${
                  isActive ? "" : "inactive"
                }`}
              >
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar-fotter">
        <h6>Powered by Andrii Moruzhko</h6>
      </div>
    </div>
  );
};

export default Sidebar;
