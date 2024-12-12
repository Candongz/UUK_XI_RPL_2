import React from "react";
import Image from "next/image";
import inventory from "@/assets/inventory.png";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function Login() {
  return (
    <>
  
      <div className="container min-h-screen bg-belakang1 px-20 py-32">
        <div className="flex flex-wrap bg-white rounded-xl shadow-xl py-20 px-20">
          <div className="w-full self-center pl-32 lg:w-1/2">
            <Image
              src={inventory}
              width={250}
              alt="invenrory"
              className="max-w-full mx-auto"
            />
          </div>
          <div className="items-center">
            <h1 className="text-4xl font-semibold text-dark text-center mb-4">
              Login
            </h1>
            <form className="px-20">
              <div className="mb-4 w-96">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-gray-300"
                  placeholder="Username"
                />
              </div>
              <div className="mb-10 w-96">
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-gray-300"
                  placeholder="Password"
                />
              </div>
              <div className="px-5">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 font-semibold rounded-full hover:bg-horver transition"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-gray-600 mt-14">
              New user?{" "}
              <a
                href="/register"
                className="text-gray-600 font-semibold hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Login;
