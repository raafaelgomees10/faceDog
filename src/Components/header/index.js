import React, { useContext } from "react";
import * as S from "./styles.js";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext.js";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <S.Header>
      <S.Nav className="container">
        <S.LinkLogo to="/" aria-label="Dogs - Home">
          <Dogs />
        </S.LinkLogo>
        {data ? (
          <S.LinkLogin to="/conta">{data.nome}</S.LinkLogin>
        ) : (
          <S.LinkLogin to="/login">Login / Cadastrar</S.LinkLogin>
        )}
      </S.Nav>
    </S.Header>
  );
};

export default Header;
