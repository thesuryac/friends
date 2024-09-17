import React from "react";

const Register = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="" onChange={handleChange} />
        <input type="password" name="password" id="" onChange={handleChange} />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
