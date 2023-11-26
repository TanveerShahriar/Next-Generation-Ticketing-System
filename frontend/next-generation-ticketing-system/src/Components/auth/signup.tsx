import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one letter, one number, and be at least 4 characters long"
      );
    } else {
      setPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      address.trim() !== "" &&
      password.trim() !== "" &&
      emailError === "" &&
      passwordError === "" &&
      nameError === "" &&
      phoneError === "" &&
      addressError === ""
    );
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value.trim() === "") {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    if (e.target.value.trim() === "") {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen background_image_login">
      <div className="w-1/3 bg-black bg-opacity-75 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              nameError ? "border-red-500" : ""
            }`}
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && (
            <p className="text-red-500 text-xs italic">{nameError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailError ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              phoneError ? "border-red-500" : ""
            }`}
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && (
            <p className="text-red-500 text-xs italic">{phoneError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              addressError ? "border-red-500" : ""
            }`}
            id="address"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressChange}
          />
          {addressError && (
            <p className="text-red-500 text-xs italic">{addressError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              passwordError ? "border-red-500" : ""
            }`}
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`${
              isFormValid() ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500"
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="button"
            onClick={handleSignup}
            disabled={!isFormValid()}
          >
            Sign Up
          </button>
          <p className="text-white text-sm">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
