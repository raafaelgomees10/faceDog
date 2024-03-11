import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import useMedia from "../../../../Hooks/useMedia.js";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../../store/user.js";
// import { UserContext } from "../../../../UserContext";
import { useLocation } from "react-router-dom";
import { ReactComponent as FeedIcon } from "../../../../Assets/feed.svg";
import { ReactComponent as SairIcon } from "../../../../Assets/sair.svg";
import { ReactComponent as AdicionarIcon } from "../../../../Assets/adicionar.svg";
import { ReactComponent as EstatisticasIcon } from "../../../../Assets/estatisticas.svg";

const HeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  // const { userLogout } = useContext(UserContext);
  const dispatch = useDispatch();

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

        <S.CustomButton onClick={() => dispatch(userLogout())}>
          <SairIcon />
          {mobile && "Sair"}
        </S.CustomButton>
      </S.Nav>
    </>
  );
};

export default HeaderNav;
