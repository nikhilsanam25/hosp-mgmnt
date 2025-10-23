import React, { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("https://doc-back.onrender.com/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Doctors Page</h1>
      {doctors.length === 0 ? (
        <p></p>
      ) : (
        doctors.map((d, index) => (
          <div key={index}>
            <p>Name: {d.name}</p>
            <p>Specialization: {d.specialization}</p>
            <p>Salary: {d.salary}</p>
            <p>Gender: {d.gender}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Doctors;
