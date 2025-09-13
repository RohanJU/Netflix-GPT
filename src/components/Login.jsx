import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div>
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="images"
        />
      </div>
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                flex flex-col w-80 bg-black/75 p-8 rounded-md shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* 👉 Ye sirf tab dikhana hai jab Sign Up ho */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 my-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="bg-red-600 hover:bg-red-700 rounded-md p-3 my-4 text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center text-gray-400 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" /> Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          New to Netflix?{" "}
          <a onClick={toggleSignInForm} className="text-white hover:underline">
            Sign up now
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
