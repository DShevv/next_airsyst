"use client";
import Image from "next/image";
import Link from "next/link";
import React, {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import styles from "./styles.module.css";
import cart from "@/public/img/icons/to-basket.svg";
import { getItems, pushItems } from "@/utils/storage";

interface Item {
  id: string;
  title: string;
  price: string;
  art: string;
  image: string;
  link: string;
  weight: number;
  disabled?: boolean;
}

interface Props {
  product: Item;
}

export default function CatalogItem({ product }: Props) {
  const [count, setCount] = useState(1);

  const addToStore = () => {
    let items = getItems();
    if (items.find((item) => item.id === product.id)) {
      items = items.map((item) =>
        item.id === product.id ? { ...item, count: item.count + count } : item
      );
    } else {
      items.push({ ...product, count: count });
    }
    pushItems(items);
  };

  return (
    <Link
      href={product.link}
      className="catalog__item"
      product-id="9"
      onClick={(e: MouseEvent<HTMLElement>) => {
        if (
          e.target instanceof HTMLElement &&
          e.target.classList.contains("in")
        ) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <Image
        className="catalog__img"
        alt=""
        src={product.image}
        width={230}
        height={150}
      />
      <div
        className="catalog__price"
        dangerouslySetInnerHTML={{ __html: product.price }}
      ></div>

      <div className="catalog__delivery">срок поставки: 30 дней</div>

      <div className="catalog__art">Артикул: {product.art}</div>

      <div className="catalog__name">{product.title}</div>
      <div className="catalog__count">
        <div
          className="catalog__minus"
          onClick={(e: MouseEvent<HTMLElement>) => {
            e.preventDefault();
            e.stopPropagation();
            count > 1 && setCount(count - 1);
          }}
        >
          -
        </div>
        <input
          id="catalog-count"
          type="number"
          className={`${styles.input} in`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (Number(e.target.value) < 1) {
              setCount(1);
            } else {
              setCount(Math.floor(Number(e.target.value)));
            }
          }}
          value={count}
        />
        <div
          className="catalog__plus"
          onClick={(e: MouseEvent<HTMLElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setCount(count + 1);
          }}
        >
          +
        </div>
      </div>

      <div
        className={`btn to-shopping-cart ${
          product.disabled ? "btn-disabled" : ""
        }`}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          if (product.disabled !== true) {
            addToStore();
          }
        }}
      >
        {product.disabled ? "" : <Image alt="" src={cart} width={30} height={23} />}{" "}
        {product.disabled ? "Под заказ" : "В корзину"}
      </div>
    </Link>
  );
}
