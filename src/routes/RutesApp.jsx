import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import { Public } from "../pages/public/Public";

const RutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Public/>
        }
      />
      <Route
        path="*"
        element={
          <NotFound/>
        }
      />
    </Routes>
  );
};

export default RutesApp;
