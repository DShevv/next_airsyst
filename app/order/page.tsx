"use client";
import FromInput from "@/components/FeedBackForm/FormInput/FromInput";
import { FormEvent, useState } from "react";

export default function Order() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const createOnChange = (name: string) => {
    return (value: string | boolean) => {
      setData({ ...data, [name]: value });
    };
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //! push to server
  };

  return (
    <section className="order wrap">
      <h1 className="title">Оформление заказа</h1>
      <div className="sub-title">Введите контактные данные</div>
      <form className="order__form" onSubmit={onSubmit}>
        <div className="order__inputs">
          <FromInput
            type="text"
            name="name"
            placeholder="Имя"
            value={data.name}
            onChange={createOnChange("name")}
          />
          <FromInput
            type="phone"
            name="phone"
            placeholder="Телефон"
            value={data.phone}
            onChange={createOnChange("phone")}
          />
          <FromInput
            type="mail"
            name="mail"
            placeholder="Email"
            value={data.email}
            onChange={createOnChange("email")}
          />
        </div>

        <input
          type="submit"
          className="btn"
          value={"Продолжить"}
          style={{ border: "none" }}
        />
      </form>
    </section>
  );
}
