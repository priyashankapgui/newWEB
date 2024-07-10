import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomePage/HomePage'


const WebRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default WebRoutes;
