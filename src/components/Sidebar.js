import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Point Nine</div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Reconciliation Dashboard</li>
        <li>Jobs</li>
        <li>Notifications</li>
        <li>Onboarding</li>
        <li>Trade Blotter</li>
        <li>Reconciliation Blotter</li>
        <li>Exception Management</li>
        <li className="active">TR EOD</li>
      </ul>
      <div className="tools">
        <h4>TOOLS</h4>
        <ul>
          <li>Reference Data</li>
          <li>ANNA DSB</li>
          <li>Legal Entities</li>
          <li>CFI (ISO 10962)</li>
          <li>Converters</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
