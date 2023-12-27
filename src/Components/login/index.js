import React, { useContext, useEffect } from "react";
import Login from "./login.js";
import { UserContext } from "../../UserContext";
import CreateUser from "./components/createUser/index";
import ResetPassword from "./components/createUser/index";
import ForgotPassword from "./components/createUser/index";
import { Navigate, Route, Routes } from "react-router-dom";
import * as S from "./styles.js";

const LoginRouter = () => {
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (login === true) {
      return <Navigate to="/conta" />;
    }
  }, []);

  return (
    <S.Section>
      <S.Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastrar" element={<CreateUser />} />
          <Route path="recuperar" element={<ForgotPassword />} />
          <Route path="resetar" element={<ResetPassword />} />
        </Routes>
      </S.Container>
    </S.Section>
  );
};

export default LoginRouter;
