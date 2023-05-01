import { useEffect } from "react";
import FHIR from "fhirclient";

const SMARTLauncher = () => {
  useEffect(() => {
    FHIR.oauth2.authorize({
      scope:
        "user/Patient.read user/Encounter.read user/Organization.read user/Practitioner.read  user/DiagnosticReport.read user/Observation.read user/ServiceRequest.read user/MedicationAdministration.read user/MedicationRequest.read user/AllergyIntolerance.read user/Condition.read launch fhirUser online_access openid profile patient/Immunization.read patient/Patient.read",
      redirectUri: "http://127.0.0.1:3000/patientDetails",
      clientId: "f2345b5c-4ea0-4f4d-b45d-559c3544cbf1",
    });
  });

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default SMARTLauncher;
