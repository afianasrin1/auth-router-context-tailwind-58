import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <div>loading..........</div>;
  }
  // return (
  //   <progress
  //     className="progress progress-info w-56"
  //     value="100"
  //     max="100"
  //   ></progress>
  // );

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
