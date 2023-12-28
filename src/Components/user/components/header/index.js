import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import HeaderNav from "./headerNav.js";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;

      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;

      default:
        setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <S.Header>
      <h1 className="title">{title}</h1>
      <HeaderNav />
    </S.Header>
  );
};

export default Header;
