import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import App from "../App";
import RecipeDetails from "../pages/RecipeDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/recipeDetails/:id/:name" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
