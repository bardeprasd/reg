import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="upload-section">
        <h3>File Upload</h3>
        <div className="file-upload">
          <input type="file" />
          <button>Choose File</button>
          <button>Refresh</button>
        </div>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Records</th>
              <th>File Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>29</td>
              <td>100</td>
              <td>NCA_Demo_File.xml</td>
              <td>xml</td>
              <td>2024-10-01</td>
              <td>11:00:14</td>
              <td>📥</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
