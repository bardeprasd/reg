import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="breadcrumb">
        Home / Derivatives / <b>TR EOD</b>
      </div>
      <div className="user-info">
        <span>fotini.tzimi@p9dt.com</span> | <a href="#">Log out</a>
      </div>
    </div>
  );
};

export default TopNav;
