import { makeAutoObservable } from "mobx";
import { User, UserData } from "../types/types";
import { login } from "../testData/apitest";

class UserStore {
  user?: User = {} as User;
  isAutorized: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User): void => {
    this.user = { ...user };
  };

  removeUser = (): void => {
    this.user = undefined;
  };

  setUserData = (data: UserData, email: string): void => {
    if (this.user) {
      this.user = { ...this.user, data: data, email: email };
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  };
}

const userStore = new UserStore();
/* userStore.setUser({
  id: 1,
  login: "admin",
  email: "admin@gmail.com",
  data: undefined,
  token: "1",
}); */

export default userStore;
