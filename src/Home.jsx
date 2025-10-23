import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("https://doc-back.onrender.com/patients")
      .then((res) => setPatients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home Page - Patients Info</h1>
      {patients.length === 0 ? (
        <p> </p>
      ) : (
        patients.map((p, index) => (
          <div key={index}>
            <p>Name: {p.name}</p>
            <p>Age: {p.age}</p>
            <p>Gender: {p.gender}</p>
            <p>Disease: {p.disease}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
