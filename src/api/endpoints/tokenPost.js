import React, { useState } from "react";

const TokenPost = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        setToken(json.token);
        console.log(json);
        return json;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Nome de usuario"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button> Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  );
};

export default TokenPost;
