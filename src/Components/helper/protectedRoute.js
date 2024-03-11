import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
  // const { login } = useContext(UserContext);
  const { data } = useSelector((state) => state.user);

  // if (login === true) {
  //   return children;
  // } else if (login === false) {
  //   return <Navigate to="/login" />;
  // } else {
  //   <></>;
  // }
  if (data) {
    return children;
  } else if (data === null) {
    return <Navigate to="/login" />;
  } else {
    <></>;
  }
};

export default ProtectedRoute;
