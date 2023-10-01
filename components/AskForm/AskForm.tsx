"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import check from "@/public/img/icons/check.svg";
import FromInput from "../FeedBackForm/FormInput/FromInput";

interface Props {
  url: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  info: string;
}

export default function AskForm({ url }: Props) {
  const [isPolicy, setIsPolicy] = useState(false);
  const [data, setData] = useState<FormData>({
    phone: "",
    email: "",
    name: "",
    info: "",
  });

  const createOnChange = (name: string) => {
    return (value: string | boolean) => {
      setData({ ...data, [name]: value });
    };
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(isPolicy);
      }}
    >
      <h2 className="feedback__title">Обратная связь</h2>
      <FromInput
        type="text"
        name="FullName"
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
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={createOnChange("email")}
      />

      <textarea
        name="info"
        id="info"
        placeholder="Информация о компании"
        value={data.info}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          createOnChange("info")(e.target.value);
        }}
      ></textarea>
      <div
        className="feedback__checkbox"
        onClick={() => {
          setIsPolicy(!isPolicy);
        }}
      >
        <div className={`feedback__check ${isPolicy && "active"}`}>
          <Image src={check} width={12} height={21} alt="" />
        </div>
        <span>Я принимаю условия политики конфиденциальности</span>
      </div>
      <input type="submit" className="btn" value="Отправить"></input>
    </form>
  );
}
