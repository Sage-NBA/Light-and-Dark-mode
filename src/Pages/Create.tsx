import { useState } from "react";

function create() {
  const [active, setActive] = useState(false);
  return (
    <div className="justify-center space-y-5 items-center text-center gap-5 p-10">
      <div className="md:flex space-y-5 md:space-y-0 md:gap-5 text-center justify-center items-center">
        <input
          className="border border-[1px] border-white light:border-black px-3 py-2 rounded"
          placeholder="First Name"
        />
        <p>
          <input
            className="border border-[1px] border-white light:border-black px-3 py-2 rounded"
            placeholder="Last Name"
          />
        </p>
      </div>
      {/* Email */}
      <p>
        <input
          className="border border-[1px] border-white light:border-black px-3 py-2 rounded w-full sm:w-50 md:w-100"
          placeholder="Email@gmail.com"
        />
      </p>
      <p>
        <input
          className="border border-[1px] border-white light:border-black px-3 py-2 rounded w-full sm:w-50 md:w-100"
          placeholder="Password"
        />
      </p>
      {/* terms and conditions */}
      <div className="flex justify-center md:gap-5 items-center">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our{" "}
          <a href="" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </p>
        <div
          onClick={() => setActive(!active)}
          className={`w-5 h-5 border border-white light:border-black rounded cursor-pointer ${
            active ? "bg-blue-800" : ""
          }`}
        ></div>
      </div>

      <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-ligh py-2 px-4 rounded">
        Create Account
      </button>
    </div>
  );
}

export default create;
