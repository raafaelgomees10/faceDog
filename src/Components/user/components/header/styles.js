import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 1rem 0 2rem;
  position: relative;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const baseStyles = css`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  &.active {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    > svg > * {
      fill: #fb1;
    }
  }
`;

export const NavLinks = styled(NavLink)`
  ${baseStyles}
`;

export const CustomButton = styled.button`
  ${baseStyles}
`;
