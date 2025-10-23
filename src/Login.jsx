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

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        /><br />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
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
          name="specialization"
          placeholder="Specialization"
          onChange={handleChange}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
