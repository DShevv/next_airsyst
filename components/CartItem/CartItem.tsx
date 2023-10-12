import Image from "next/image";
import check from "@/public/img/icons/check.svg";
import Link from "next/link";
import { FormEvent } from "react";
import styles from "./CartItem.module.css";
import cross from "@/public/img/icons/delete.svg";

interface Props {
  isSelected: boolean;
  title: string;
  price: string;
  count: number;
  total: string;
  image: string;
  link: string;
  setIsSelected: (value: boolean) => void;
  setCount: (value: number) => void;
  onDelete: () => void;
}

export default function CartItem({
  onDelete,
  setCount,
  setIsSelected,
  isSelected,
  title,
  price,
  count,
  total,
  image,
  link,
}: Props) {
  return (
    <div className="shop-cart__item">
      <div className="shop-cart__col select">
        <div
          className={`filter__checkbox ${isSelected && "active"}`}
          onClick={() => {
            setIsSelected(!isSelected);
          }}
        >
          <div className={`filter__check`}>
            <Image src={check} width={12} height={21} alt="" />
          </div>
        </div>
      </div>
      <Link
        href={link}
        className="shop-cart__col shop-cart__img"
        style={{ display: "block" }}
      >
        <Image alt="" src={image} width={72} height={72} />
      </Link>
      <div className="shop-cart__col shop-cart__name">{title}</div>
      <div
        className="shop-cart__col shop-cart__price"
        dangerouslySetInnerHTML={{ __html: price }}
      ></div>
      <div className="shop-cart__col shop-cart__count">
        <div className="catalog__count">
          <div
            className="catalog__minus"
            onClick={() => {
              count > 1 && setCount(count - 1);
            }}
          >
            -
          </div>
          <input
            id="catalog-count"
            type="number"
            className={styles.input}
            value={count}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              if (Number(e.currentTarget.value) < 1) {
                setCount(1);
              } else {
                setCount(Math.floor(Number(e.currentTarget.value)));
              }
            }}
          />
          <div className="catalog__plus" onClick={() => setCount(count + 1)}>
            +
          </div>
        </div>
      </div>

      <div
        className="shop-cart__col shop-cart__full-price"
        dangerouslySetInnerHTML={{ __html: total }}
      ></div>
      <div className="shop-cart__col shop-cart__delete">
        <Image
          alt=""
          src={cross}
          width={18}
          height={18}
          onClick={() => onDelete()}
        />
      </div>
    </div>
  );
}
