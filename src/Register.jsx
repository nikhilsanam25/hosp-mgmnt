import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    doctorName: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Patient Registered");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Register Patient</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow p-4 rounded"
        style={{ maxWidth: "500px" }}
      >
        <input type="text" name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input type="number" name="age" className="form-control mb-2" placeholder="Age" onChange={handleChange} />
        <input type="text" name="gender" className="form-control mb-2" placeholder="Gender" onChange={handleChange} />
        <input type="text" name="disease" className="form-control mb-2" placeholder="Disease" onChange={handleChange} />
        <input type="text" name="doctorName" className="form-control mb-2" placeholder="Doctor's Name" onChange={handleChange} />
        <input type="text" name="specialization" className="form-control mb-3" placeholder="Specialization" onChange={handleChange} />
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default Register;
