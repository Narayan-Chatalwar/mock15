import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Home from "../Components/Home";
import Playzone from "../Components/Playzone";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="playzone" element={<Playzone />} />
      <Route path="*" element={<h3>404 Page not foound</h3>} />
    </Routes>
  );
};

export default AllRoutes;
