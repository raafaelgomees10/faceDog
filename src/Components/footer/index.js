import React from "react";
import * as S from "./styles";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <S.Footer>
      <Dogs />
      <p>FaceDog. Alguns direitos reservados.</p>
      <p>
        Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/rafael-gomes-77ab23160/">
          Rafael Gomes
        </a>
      </p>
    </S.Footer>
  );
};

export default Footer;
