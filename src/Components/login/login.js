import React, { useContext } from "react";
import * as S from "./styles.js";
import Input from "../form/Input.js";
import Button from "../form/Button.js";
import Error from "../helper/error.js";
import useForm from "../../Hooks/useForm.js";
import { UserContext } from "../../UserContext.js";

const Login = () => {
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
    <div className="animeLeft">
      <h1 className="title">Login</h1>

      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error error={error} />}
      </S.Form>
      <S.LinkRecovery to="/login/recuperar">Perdeu a senha?</S.LinkRecovery>
      <S.Box>
        <S.SubTitle>Cadastre-se</S.SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <S.LinkCreate to="/login/cadastrar">Cadastro</S.LinkCreate>
      </S.Box>
    </div>
  );
};

export default Login;
