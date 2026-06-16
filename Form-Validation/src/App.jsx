import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be 8 characters long!");
      return;
    } else if (password != confirmPassword) {
      setError("Password and Confirm Password must be same!");
      return;
    }

    if (!/[!@#$%^&*()<>,.";:]/.test(password)) {
      setError("Password must contain any special character!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain any capital letter!");
      return;
    }
    setError("");
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    toast.success("🦄 Login Successfull! ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  };
  const inputStyle =
    "w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500";
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 px-4 overflow-hidden">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center gap-4 border border-gray-200 rounded-xl p-7"
        >
          <h1 className="text-3xl font-bold text-center">Create an Account</h1>

          <p className="text-gray-500 text-sm text-center">
            Please fill in the details below.
          </p>
          {/* <label htmlFor="name" className="text-sm font-medium">
            Full Name :
          </label> */}
          <input
            // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
            className={inputStyle}
            type="text"
            id="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required="required"
            placeholder="Enter Name here"
            autoComplete="name"
          />
          {/* <label htmlFor="email" className="text-sm font-medium">
            Email No :
          </label> */}
          <input
            // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
            className={inputStyle}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required="required"
            placeholder="Enter Your Email"
            autoComplete="email"
          />
          {/* <label htmlFor="password" className="text-sm font-medium">
            Full Name
          </label> */}
          <input
            // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
            className={inputStyle}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required="required"
            placeholder="Enter Password"
            autoComplete="new-password"
          />
          {/* <label htmlFor="confirm-password" className="text-sm font-medium">
            Confirm Password :
          </label> */}
          <input
            className={inputStyle}
            // className="w-full border-2 border-[#7e7373af] focus:border-none focus:outline-2 outline-[#5518c7] px-3 py-1 text-xl rounded-lg"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required="required"
            placeholder="Confirm Password"
          />

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="text-lg text-white px-4 py-2 rounded-lg bg-[#1a58df] font-semibold mt-5 w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
