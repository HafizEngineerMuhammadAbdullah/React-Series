import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-700 py-2 px-5">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-500 px-5 py-2 m-3 font-medium rounded cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-emerald-600 px-5 py-2 m-3 font-medium rounded cursor-pointer active:scale-95"
      >
        Return Back!
      </button>
       <button
        onClick={() => navigate(+1)}
        className="bg-emerald-600 px-5 py-2 m-3 font-medium rounded cursor-pointer active:scale-95"
      >
        Next!
      </button>
    </div>
  );
};

export default Navbar2;
