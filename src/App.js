import "./App.css";
import React from "react";
import Home from "./Components/home";
import User from "./Components/user";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { UserStorage } from "./UserContext";
import LoginRouter from "./Components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/helper/protectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<LoginRouter />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
