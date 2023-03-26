import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">Logo</div>
      <ul className="menus">
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-compass"></span>
            <span className="menu-text">Map Overview</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-apps"></span>
            <span className="menu-text">Assets</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-time"></span>
            <span className="menu-text">Time Management</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-file-text"></span>
            <span className="menu-text">Logbooks</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-pie-chart"></span>
            <span className="menu-text">Dashboards</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-gears"></span>
            <span className="menu-text">Tools</span>
          </Link>
        </li>
        <li className="menu-option">
          <Link href={""}>
            <span className="icon icon-file-text2"></span>
            <span className="menu-text">Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
