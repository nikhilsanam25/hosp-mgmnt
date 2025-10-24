import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const patients = [
    { name: "shravan", age: 26, gender: "Male", disease: "Headache", doctor: "Satya Deep (cardio)" },
    { name: "Satya Deep G", age: 29, gender: "Male", disease: "Headache", doctor: "Teja (Muscles)" },
    { name: "Abdul", age: 29, gender: "Male", disease: "Bones", doctor: "Sam (Bones)" },
    { name: "ram teja", age: 20, gender: "male", disease: "Brain", doctor: "Teja (Muscles)" },
    { name: "vikas", age: 30, gender: "male", disease: "fever", doctor: "" },
    { name: "vikas", age: 30, gender: "male", disease: "fever", doctor: "" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Patient Details</h2>
      <div className="row">
        {patients.map((patient, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold">Patient ID: {index + 1}</h6>
                <p><b>Name:</b> {patient.name}</p>
                <p><b>Age:</b> {patient.age}</p>
                <p><b>Gender:</b> {patient.gender}</p>
                <p><b>Disease:</b> {patient.disease}</p>
                <p><b>Doctor:</b> {patient.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
