import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles.js";
import useMedia from "../../../../Hooks/useMedia.js";
import { UserContext } from "../../../../UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as FeedIcon } from "../../../../Assets/feed.svg";
import { ReactComponent as SairIcon } from "../../../../Assets/sair.svg";
import { ReactComponent as AdicionarIcon } from "../../../../Assets/adicionar.svg";
import { ReactComponent as EstatisticasIcon } from "../../../../Assets/estatisticas.svg";

const HeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  const mobile = useMedia("(max-width:767px)");
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <S.MobileButton
          className={mobileMenu && "active"}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <S.Nav
        className={`${mobile && "navMobile"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
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
    </>
  );
};

export default HeaderNav;
