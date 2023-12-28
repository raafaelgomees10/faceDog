import React, { useContext, useState } from "react";
import * as S from "./styles.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../UserContext";
import { ReactComponent as FeedIcon } from "../../../../Assets/feed.svg";
import { ReactComponent as SairIcon } from "../../../../Assets/sair.svg";
import { ReactComponent as AdicionarIcon } from "../../../../Assets/adicionar.svg";
import { ReactComponent as EstatisticasIcon } from "../../../../Assets/estatisticas.svg";

const HeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <S.Nav>
      <S.NavLinks to="/conta" end>
        <FeedIcon />
        {mobile && "Minhas Photos"}
      </S.NavLinks>

      <S.NavLinks to="/conta/estatisticas">
        <EstatisticasIcon />
        {mobile && "Estatisticas"}
      </S.NavLinks>

      <S.NavLinks to="/conta/postar">
        <AdicionarIcon />
        {mobile && "Adicionar Foto"}
      </S.NavLinks>

      <S.CustomButton onClick={handleLogout}>
        <SairIcon />
        {mobile && "Sair"}
      </S.CustomButton>
    </S.Nav>
  );
};

export default HeaderNav;
