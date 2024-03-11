import React from "react";
import Input from "../../../form/Input";
import Head from "../../../helper/head";
import Error from "../../../helper/error";
import { useDispatch } from "react-redux";
import Button from "../../../form/Button";
import { CREATE_USER } from "../../../../api";
import useForm from "../../../../Hooks/useForm";
import useFetch from "../../../../Hooks/useFetch";
import { userLogin } from "../../../../store/user";
// import { UserContext } from "../../../../UserContext";

const CreateUser = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");

  // const { userLogin } = useContext(UserContext);
  const dispatch = useDispatch();
  const { loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { url, options } = CREATE_USER({
      email: email.value,
      username: username.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />

      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default CreateUser;
