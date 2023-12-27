import React, { useContext } from "react";
import Input from "../../../form/Input";
import Button from "../../../form/Button";
import useForm from "../../../../Hooks/useForm";
import { CREATE_USER } from "../../../../api";
import { UserContext } from "../../../../UserContext";

const CreateUser = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");

  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { url, options } = CREATE_USER({
      email: email.value,
      username: username.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animationLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Caadastrar</Button>
      </form>
    </section>
  );
};

export default CreateUser;
