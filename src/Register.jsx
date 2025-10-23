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

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        /><br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="disease"
          placeholder="Disease"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor's Name"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          onChange={handleChange}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
