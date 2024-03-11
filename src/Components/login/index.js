import React from "react";
import Login from "./login.js";
import * as S from "./styles.js";
import { useSelector } from "react-redux";
import Loading from "../helper/loading.js";
import NotFound from "../notFound/index.js";
// import { UserContext } from "../../UserContext";
import CreateUser from "./components/createUser/";
import ResetPassword from "./components/resetPassword";
import ForgotPassword from "./components/forgotPassword";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginRouter = () => {
  // const { login } = useContext(UserContext);
  const { data, loading } = useSelector((state) => state.user);

  //   if (login === true) {
  //     return <Navigate to="/conta" />;
  //   }

  if (loading) {
    return <Loading />;
  }
  if (data) {
    return <Navigate to="/conta" />;
  }

  return (
    <S.Section>
      <S.Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cadastrar" element={<CreateUser />} />
          <Route path="resetar" element={<ResetPassword />} />
          <Route path="recuperar" element={<ForgotPassword />} />
        </Routes>
      </S.Container>
    </S.Section>
  );
};

export default LoginRouter;
