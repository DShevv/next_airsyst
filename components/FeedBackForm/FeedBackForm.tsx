"use client";
import { ChangeEvent, useEffect, useState } from "react";
import FeedBackInput from "./FeedBackInput/FeedBackInput";
import FeedBachCheckbox from "./FeedBachCheckbox/FeedBachCheckbox";
import Image from "next/image";
import check from "../../public/img/icons/check.svg";

interface Props {
  url: string;
}

interface FormData {
  country: string;
  company: string;
  phone: string;
  email: string;
  site: string;
  person: string;
  isGen: boolean;
  isComp: boolean;
  isDiesel: boolean;
  info: string;
}

export default function FeedBackForm({ url }: Props) {
  const [isPolicy, setIsPolicy] = useState(false);
  const [data, setData] = useState<FormData>({
    country: "",
    company: "",
    phone: "",
    email: "",
    site: "",
    person: "",
    isGen: false,
    isComp: false,
    isDiesel: false,
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
      }}
    >
      <div className="form__title">Оставьте заявку</div>
      <div className="form__inputs">
        <FeedBackInput
          className="small"
          type="text"
          name="country"
          placeholder="Страна*"
          value={data.country}
          onChange={createOnChange("country")}
        />
        <FeedBackInput
          className="small"
          type="text"
          name="company"
          placeholder="Название компании*"
          value={data.company}
          onChange={createOnChange("company")}
        />
        <FeedBackInput
          className="small"
          type="phone"
          name="phone"
          placeholder="Телефон для связи*"
          value={data.phone}
          onChange={createOnChange("phone")}
        />
        <FeedBackInput
          className="small"
          type="email"
          name="email"
          placeholder="E-mail*"
          value={data.email}
          onChange={createOnChange("email")}
        />
        <FeedBackInput
          className="small"
          type="text"
          name="site"
          placeholder="Сайт*"
          value={data.site}
          onChange={createOnChange("site")}
        />
        <FeedBackInput
          className="small"
          type="text"
          name="FullName"
          placeholder="Должностное лицо*"
          value={data.person}
          onChange={createOnChange("person")}
        />
      </div>
      <span>Желаемое оборудование:</span>
      <div className="form__radios">
        <FeedBachCheckbox
          id="gen"
          label="Генераторы газов"
          value={data.isGen}
          onChange={createOnChange("isGen")}
        />
        <FeedBachCheckbox
          id="compressor"
          label="Компрессоры и воздуходувки"
          value={data.isComp}
          onChange={createOnChange("isComp")}
        />
        <FeedBachCheckbox
          id="diesel"
          label="Дизельгенераторы"
          value={data.isDiesel}
          onChange={createOnChange("isDiesel")}
        />
      </div>
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
        className={`filter__checkbox ${isPolicy && "active"}`}
        onClick={() => {
          setIsPolicy(!isPolicy);
        }}
      >
        <div className="filter__check">
          <Image src={check} width={12} height={21} alt="" />
        </div>
        <span>Я принимаю условия политики конфиденциальности</span>
      </div>
      <input type="submit" className="btn" value="Отправить"></input>
    </form>
  );
}
