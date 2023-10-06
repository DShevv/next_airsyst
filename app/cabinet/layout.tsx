"use client";
import React, { ReactNode, useEffect } from "react";
import { Container } from "./MainPage.style";
import { Modal } from "@/components/Modal/Modal";
import StatusBar from "@/components/StatusBar/StatusBar";
import { ThemeProvider } from "styled-components";
import { ThemeLight } from "@/theme/theme-light";
import { RootWrapper, Wrapper } from "./App.styles";
import statusStore from "@/stores/status-store";
import { observer } from "mobx-react-lite";
import FormPage from "@/components/FormPage/FormPage";
import userStore from "@/stores/user-store";
import { CabinetContainer, CabinetContent, Title } from "./Cabinet.style";
import Menu from "@/components/Menu/Menu";

interface Props {
  children: ReactNode;
}

export default observer(Page);

function Page({ children }: Props) {
  const { user, setUser } = userStore;
  const { current } = statusStore;

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    console.log(storedValue);

    if (storedValue !== null) {
      setUser({ ...JSON.parse(storedValue) });
    } else {
      setUser({
        id: 1,
        login: "admin",
        email: "admin@gmail.com",
        data: undefined,
        token: "1",
      });
    }

    //login("dimas", "secret");
    //AuthService.login("dimas", "secret");

    /*
    posts();
    createUser(); */

    return () => {
      localStorage.setItem("user", JSON.stringify(user));
    };
  }, []);

  return (
    <RootWrapper bgcolor={current?.backgroundColor}>
      <ThemeProvider theme={ThemeLight}>
        <Wrapper bgcolor={current?.backgroundColor}>
          {user?.data ? (
            <Container>
              <Modal />
              <StatusBar></StatusBar>
              <div>
                <Title>Личный кабинет</Title>
                <CabinetContainer>
                  <Menu />
                  <CabinetContent>{children}</CabinetContent>
                </CabinetContainer>
              </div>
            </Container>
          ) : (
            <FormPage />
          )}
        </Wrapper>
      </ThemeProvider>
    </RootWrapper>
  );
}
