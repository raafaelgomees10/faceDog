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

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0.1rem;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    > a,
    > button {
      justify-content: flex-start;
      display: flex;
      align-items: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
      > svg {
        margin-right: 0.5rem;
      }
    }
    > button {
      border-bottom: none;
    }

    > a:hover,
    > button:hover {
      > svg > * {
        fill: #fb1;
      }
    }
  }

  &.navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
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

export const MobileButton = styled.button`
  ${baseStyles}
  padding: 0px;
  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover,
  &.active {
    /* &${(props) => props.active} { */
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  /* ${(props) =>
    props.active &&
    css`
      &::after {
        transform: rotate(90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      }
    `}; */

  &.active {
    &::after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
`;
