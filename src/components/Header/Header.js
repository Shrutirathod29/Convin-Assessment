import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow p-3 pr-10 flex justify-between">
      <p className="text-blue-500 font-semibold ">Convin Frontend Assessment</p>
      <div className="flex gap-6 text-blue-900">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </div>
    </div>
  );
};

export default Header;
