import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PatientDetails from './PatientDetails';
import SMARTLauncher from './SMARTLauncher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="patientDetails" element={<PatientDetails />} />
        <Route exact path="launch" element={<SMARTLauncher />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
