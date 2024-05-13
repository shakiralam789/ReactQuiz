import "../style/app.css";
import RouteCom from "./RouteCom";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <RouteCom Routes={Routes} Route={Route} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
