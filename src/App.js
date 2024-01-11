import "./App.css";
import React from "react";
import Home from "./Components/home";
import User from "./Components/user";
import Photo from "./Components/photo";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { UserStorage } from "./UserContext";
import NotFound from "./Components/notFound";
import LoginRouter from "./Components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/helper/protectedRoute";
import UserProfile from "./Components/user/components/userProfile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="login/*" element={<LoginRouter />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
