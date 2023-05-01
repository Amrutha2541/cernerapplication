import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import PatientDetails from "./PatientDetails";
import SMARTLauncher from "./SMARTLauncher";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="patientDetails" element={<PatientDetails />} />
        <Route path="launch" element={<SMARTLauncher />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
