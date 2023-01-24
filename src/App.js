import { CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <div className="App">
          <Sidebar />
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
