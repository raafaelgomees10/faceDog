import React from "react";
import * as S from "./styles.js";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

function Header() {
  return (
    <S.Header>
      <S.Nav className="container">
        <S.LinkLogo to="/" aria-label="Dogs - Home">
          <Dogs />
        </S.LinkLogo>
        <S.LinkLogin to="/login">Login / Cadastrar</S.LinkLogin>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
