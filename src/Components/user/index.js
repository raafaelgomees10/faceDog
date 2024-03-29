import React from "react";
import * as S from "./styles.js";
import Feed from "../feed/index.js";
import Head from "../helper/head.js";
import { useSelector } from "react-redux";
import NotFound from "../notFound/index.js";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/index.js";
// import { UserContext } from "../../UserContext.js";
import UserStats from "./components/userStats/index.js";
import UserPhotoPost from "./components/userPhotoPost/index.js";

const User = () => {
  // const { data } = useContext(UserContext);
  const { data } = useSelector((state) => state.user);
  return (
    <S.Section className="container">
      <Head title="Minha Conta" />

      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </S.Section>
  );
};

export default User;
