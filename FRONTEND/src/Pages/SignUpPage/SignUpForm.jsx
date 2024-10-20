import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  // State for form inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setError(null);
    setSuccess(null);

    const user = {
      username: `${formData.firstname} ${formData.lastname}`,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Make a POST request to the server
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Send user data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("User registered successfully!");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form className="flex flex-col w-3/4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-zinc-900">Sign Up</h2>
        <p className="mt-2 text-sm text-slate-500">
          New bidders, as soon as you have submitted your information you will
          be eligible to bid in the auction.
        </p>
      </div>

      {/* First Name */}
      <div className="flex flex-col mt-2 w-full text-sm whitespace-nowrap text-zinc-900">
        <label htmlFor="firstname" className="font-semibold text-ellipsis">
          First Name
        </label>
        <div className="flex flex-col mt-1 w-full">
          <input
            id="firstname"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            className="flex-1 shrink gap-2 self-stretch px-1 py-1 w-full rounded border-solid border-[1.5px] border-slate-500 min-h-[40px] text-ellipsis"
            placeholder="Enter your first name"
          />
        </div>
      </div>

      {/* Last Name */}
      <div className="flex flex-col mt-1 w-full text-sm whitespace-nowrap text-zinc-900">
        <label htmlFor="lastname" className="font-semibold text-ellipsis">
          Last Name
        </label>
        <div className="flex flex-col mt-1 w-full">
          <input
            id="lastname"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            className="flex-1 shrink gap-2 self-stretch px-1 py-1 w-full rounded border-solid border-[1.5px] border-slate-500 min-h-[40px] text-ellipsis"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col mt-1 w-full text-sm whitespace-nowrap text-zinc-900">
        <label htmlFor="email" className="font-semibold text-ellipsis">
          Email Address
        </label>
        <div className="flex flex-col mt-1 w-full">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 shrink gap-2 self-stretch px-1 py-1 w-full rounded border-solid border-[1.5px] border-slate-500 min-h-[40px] text-ellipsis"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col mt-1 w-full text-sm whitespace-nowrap text-zinc-900">
        <label htmlFor="password" className="font-semibold text-ellipsis">
          Password
        </label>
        <div className="flex flex-col mt-1 w-full">
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="flex-1 shrink gap-2 self-stretch px-1 py-1 w-full rounded border-solid border-[1.5px] border-slate-500 min-h-[40px] text-ellipsis"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {/* Optional Checkbox */}
      <div className="flex gap-2 items-center mt-1 w-full text-sm text-zinc-900">
        <input type="checkbox" id="keepSignedIn" className="sr-only" />
        <label
          htmlFor="keepSignedIn"
          className="flex items-center cursor-pointer"
        >
          <span className="w-4 h-4 border border-gray-300 rounded-sm inline-block mr-2"></span>
          Receive Outbid emails
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          background:
            "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
        }}
        className="flex flex-col mt-4 w-full text-base font-semibold text-center text-white  whitespace-nowrap"
      >
        <span className="self-stretch px-6 py-3 w-full rounded min-h-[44px] max-md:px-5 ">
          Submit
        </span>
      </button>

      {/* Success/Error Messages */}
      {success && (
        // <p className="text-green-700 font-semibold mt-2">{success}</p>
        navigate("/signupsuccess")
      )}
      {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}
    </form>
  );
}

export default SignUpForm;
