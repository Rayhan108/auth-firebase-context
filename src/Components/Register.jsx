import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";

const Register = () => {
  const [error,setError] = useState('')
  const {user,createUser} =useContext(AuthContext)


  const handleRegister = (event) => {

    event.preventDefault()
    const form = event.target;
    const email =form.email.value;
    const password=form.password.value;
    const name =form.name.value;
    setError('')
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset()
    })
    .catch(error=>{
      setError(error.message)
    })
  };

  return (
    <div className=" min-h-screen bg-base-200">
      <h1 className=" mb-12 text-5xl font-bold text-center">
        Registration now!!!
      </h1>
      <form
        onSubmit={handleRegister}
        className="flex   items-center justify-center"
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="abc"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                required
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center">
        <Link to="/login">
          Already have account?Go to
          <button className="btn btn-link">Login</button>
        </Link>
      </div>
      <p className="text-1xl font-bold text-red-700">{error}</p>
    </div>
  );
};

export default Register;
