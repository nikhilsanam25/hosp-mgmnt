import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Doctors() {
  const doctors = [
    { name: "Satya Deep", gender: "Male", age: 26, specialization: "cardio", salary: 4000000 },
    { name: "Teja", gender: "Male", age: 26, specialization: "Muscles", salary: 7000000 },
    { name: "Sam", gender: "Male", age: 26, specialization: "Bones", salary: 4000000 },
    { name: "Anu", gender: "Male", age: 26, specialization: "Blood Pressure", salary: 7000000 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Doctors List</h2>
      <div className="row">
        {doctors.map((doctor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title fw-bold">Doctor ID: {index + 1}</h6>
                <p><b>Name:</b> {doctor.name}</p>
                <p><b>Gender:</b> {doctor.gender}</p>
                <p><b>Age:</b> {doctor.age}</p>
                <p><b>Specialization:</b> {doctor.specialization}</p>
                <p><b>Salary:</b> {doctor.salary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
