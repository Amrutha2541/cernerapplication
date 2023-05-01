import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import PatientDetails from "./PatientDetails";
import SMARTLauncher from "./SMARTLauncher";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="patientDetails" element={<PatientDetails />} />
        <Route exact path="launch" element={<SMARTLauncher />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
