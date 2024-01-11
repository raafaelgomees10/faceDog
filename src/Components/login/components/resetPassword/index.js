import React, { useEffect, useState } from "react";
import Input from "../../../form/Input";
import Head from "../../../helper/head";
import Button from "../../../form/Button";
import Error from "../../../helper/error";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../Hooks/useForm";
import { PASSWORD_RESET } from "../../../../api";
import useFetch from "../../../../Hooks/useFetch";

const ResetPassword = () => {
  const [login, setLogin] = useState();
  const [key, setKey] = useState();

  const password = useForm();

  const { error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const _key = params.get("key");
    const _login = params.get("login");

    if (_key) {
      setKey(_key);
    }
    if (_login) {
      setLogin(_login);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        key: key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) {
        return navigate("/login");
      }
    }
  };
  return (
    <div>
      <Head title="Resete a senha" />

      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      {error && <Error error={error} />}
    </div>
  );
};

export default ResetPassword;
