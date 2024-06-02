import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

import { AuthContext } from "../../contextApi/AuthContextProvider";

import ViewProduct from "../Product/ViewProduct";



const PrivateRoute = ({ children }) => {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails.isLogedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
     
     
      
      
      <Route
        path="/:id"
        element={
          <PrivateRoute>
            <ViewProduct />
          </PrivateRoute>
        }
      />
      

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
