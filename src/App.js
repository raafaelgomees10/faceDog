import React, { useContext } from "react";
import "./App.css";
// import Api from "./api/api";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import { UserStorage } from "./UserContext";
// import CreateUser from "./Components/login/createUser";
// import ResetPassword from "./Components/login/resetPassword";
// import ForgotPassword from "./Components/login/forgotPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              {/* <Route path="/login/cadastrar" element={<CreateUser />} />
            <Route path="/login/recuperar" element={<ForgotPassword />} />
            <Route path="/login/resetar" element={<ResetPassword />} /> */}
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
      {/* <Api /> */}
    </div>
  );
};

export default App;
