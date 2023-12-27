import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Input from "../form/Input";
import Button from "../form/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
const Login = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  };

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/cadastrar">Cadastro</Link>
      <Outlet />
    </section>
  );
};

export default Login;
