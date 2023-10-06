import Link from "next/link";
import { styled } from "styled-components";

export const StyledItem = styled.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  position: relative;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &.active {
    width: calc(100% - 2px);
    font-weight: 600;
    border-left: 2px solid ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 1169px) {
    padding-left: 13px;
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    padding-left: 0;
    justify-content: center;
    font-size: 15px;
  }
`;
