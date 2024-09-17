import React, { useState } from "react";

const Login = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });
    console.log(formdata);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" id="" onChange={handleChange} />
        <input type="password" name="password" id="" onChange={handleChange} />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
