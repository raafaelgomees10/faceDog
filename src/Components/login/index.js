import React, { useContext, useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Input from "../form/Input";
import Button from "../form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Helper from "../helper";
import * as S from "./styles.js";

const Login = () => {
  const { login } = useContext(UserContext);
  useEffect(() => {
    if (login === true) {
      return <Navigate to="/conta" />;
    }
  }, []);

  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section className="animationLeft">
      <h1 className="title">Login</h1>

      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Helper error={error} />}
      </S.Form>
      <S.LinkRecovery to="/login/recuperar">Perdeu a senha?</S.LinkRecovery>
      <S.Box>
        <S.SubTitle>Cadastre-se</S.SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <S.LinkCreate to="/login/cadastrar">Cadastro</S.LinkCreate>
      </S.Box>
      <Outlet />
    </section>
  );
};

export default Login;
