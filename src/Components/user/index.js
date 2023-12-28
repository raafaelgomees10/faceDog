import React from "react";
import * as S from "./styles.js";
import Feed from "../feed/index.js";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/index.js";
import UserStats from "./components/userStats/index.js";
import UserPhotoPost from "./components/userPhotoPost/index.js";

const User = () => {
  return (
    <S.Section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </S.Section>
  );
};

export default User;
