import FHIR from "fhirclient";
import { useEffect, useState } from "react";

function PatientDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [patientId, setPatientId] = useState(null);
  const [token, setToken] = useState(null);
  const resources = [
    "Observation",
    "Encounter",
    "DiagnosticReport",
    "AllergyIntolerance",
    "ServiceRequest",
    "MedicationAdministration",
    "MedicationRequest",
    "Condition",
  ];
  FHIR.oauth2
    .ready()
    .then(function (client) {
      localStorage.setItem("token", client.state.tokenResponse.access_token);
      setToken(client.state.tokenResponse.access_token);
      console.log(token);
      setPatientId(client.patient.id);
    })
    .catch(console.error);

  useEffect(() => {
    if (token !== null) {
      fetch(
        `https://fhir-ehr.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient?_id=${patientId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
      resources.forEach((resource) => {
        fetch(
          `https://fhir-ehr.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/${resource}?patient=${patientId}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        ).then((res) => res.json());
      });
    }
  }, [token]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table></table>
      // <ul>
      //     {/* {items.map(item => (
      //         <li key={item.id}>
      //             {item.name} {item.price}
      //         </li>
      //     ))} */}
      // </ul>
    );
  }

  // return (<div>
  //   <h4>Current Patient</h4>

  //   <div id="patient">Loading...</div>
  //   <br/>
  //   <h4>Observations</h4>
  //   <div id="meds">Loading...</div>
  //   <br/>
  //   <h4>diagnosticreport</h4>
  //   <div id="diagnosticreport">Loading....</div>

  // </div>)
}

export default PatientDetails;
