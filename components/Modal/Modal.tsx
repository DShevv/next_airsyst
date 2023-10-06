"use client";
import { observer } from "mobx-react-lite";
import modalStore from "@/stores/modal-store";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import {
  ModalCaption,
  ModalClose,
  ModalContainer,
  ModalWindow,
} from "./Modal.style";
import { useEffect } from "react";

export const Modal = observer(() => {
  const { info, setInfo } = modalStore;

  const closeHandler = () => {
    setInfo({ isVisible: false, text: "", link: "", buttonText: "" });
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <ModalContainer $visible={info.isVisible}>
      <ModalWindow>
        <ModalCaption>{info.text}</ModalCaption>
        <LinkButton to={info.link} onClick={closeHandler}>
          {info.buttonText}
        </LinkButton>
        <ModalClose href={info.link} onClick={closeHandler} />
      </ModalWindow>
    </ModalContainer>
  );
});
