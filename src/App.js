import "./App.css";
import React from "react";
import Home from "./Components/home";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { UserStorage } from "./UserContext";
import LoginRouter from "./Components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<LoginRouter />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
