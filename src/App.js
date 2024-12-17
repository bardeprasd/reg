import React from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import SearchRecords from "./components/SearchRecords";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <SearchRecords />
      </div>
    </div>
  );
}

export default App;
