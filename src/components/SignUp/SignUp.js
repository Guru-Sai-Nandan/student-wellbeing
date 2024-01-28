import React from "react";
import "./SignUp.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { v4: uuidv4 } = require("uuid");
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //HTTP req error state
  let [err, setErr] = useState("");

  function generateUserId() {
    return uuidv4();
  }
  let addUser = async (newUser) => {
    const userId = generateUserId(); // Replace this with your logic to get the user ID

    // Create a modified newUser object with the appended user ID
    const modifiedUser = {
      ...newUser,
      userId: userId, // Append the user ID here
    };
    console.log(modifiedUser, 'modified user...');
    const response = await axios.post(
      "http://localhost:4000/user-api/register",
      modifiedUser,
      {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    );
    navigate('/login')
  };
  let navigate = useNavigate()
  return (
    <div className="flex mt-[7%] mx-auto ml-8">
      <div className="signup-form mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(addUser)}>
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              Username{" "}
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              id="username"
              className="input-field mt-1"
              {...register("username", { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              className="input-field mt-1"
              {...register("password", { required: true })}
            />
          </div>
          <button type="submit" className="button"
          >
            Sign Up
          </button>

        </form>
      </div>

      {/* <div className="welcome-box">
          <h2 className="text-xl font-bold mb-4 text-[#f8f9fa]">Welcome to Creative Haven</h2>
          <img
            src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg&ga=GA1.1.1458602147.1706429356&semt=sph"
            alt=""
            className="rounded mt-14"
          />
        </div> */}
    </div>
  );
};

export default SignUp;
