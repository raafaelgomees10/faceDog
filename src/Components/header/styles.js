import { Link } from "react-router-dom";
import styled from "styled-components";
import userIcon from "../../Assets/usuario.svg";

export const Header = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;
export const LinkLogo = styled(Link)`
  padding: 0.5rem 0;
`;
export const LinkLogin = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${userIcon}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
