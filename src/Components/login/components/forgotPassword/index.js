import React from "react";
import Input from "../../../form/Input";
import Head from "../../../helper/head";
import Button from "../../../form/Button";
import Error from "../../../helper/error";
import useForm from "../../../../Hooks/useForm";
import useFetch from "../../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../../api";

const ForgotPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("recuperar", "resetar"),
      });

      await request(url, options);
    }
  };

  return (
    <section>
      <Head title="Perdeu a senha" />

      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      {error && <Error error={error} />}
    </section>
  );
};

export default ForgotPassword;
