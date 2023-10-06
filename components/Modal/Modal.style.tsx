import { styled } from "styled-components";
import cross from "@/public/img/icons/cross.svg";
import Link from "next/link";

interface Props {
  $visible: boolean;
}

export const ModalContainer = styled.div<Props>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 00%;
  left: 00%;
  display: ${(props) => (props.$visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  background: rgba(68, 75, 89, 0.97);
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 770px;
  height: 330px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1169px) {
    width: 550px;
  }

  @media screen and (max-width: 680px) {
    width: 340px;
  }
`;

export const ModalCaption = styled.div`
  max-width: 560px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`;

export const ModalClose = styled(Link)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 22px;
  height: 22px;
  transform: rotate(90deg);
  background-image: url(${cross});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (max-width: 680px) {
  }
`;
