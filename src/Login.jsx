import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    salary: "",
    gender: "",
    age: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted (Frontend only)");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Doctor Login</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow p-4 rounded"
        style={{ maxWidth: "500px" }}
      >
        <input type="text" name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input type="number" name="salary" className="form-control mb-2" placeholder="Salary" onChange={handleChange} />
        <input type="text" name="gender" className="form-control mb-2" placeholder="Gender" onChange={handleChange} />
        <input type="number" name="age" className="form-control mb-2" placeholder="Age" onChange={handleChange} />
        <input type="text" name="specialization" className="form-control mb-3" placeholder="Specialization" onChange={handleChange} />
        <button type="submit" className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
};

export default Login;
