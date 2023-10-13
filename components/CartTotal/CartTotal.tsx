import Link from "next/link";
import React from "react";

interface Item {
  id: string;
  isSelected: boolean;
  title: string;
  price: string;
  count: number;
  total: string;
  image: string;
  link: string;
  weight: number;
}

interface Props {
  items: Item[];
}

function numberWithSpaces(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
}

export default function CartTotal({ items }: Props) {
  const getTotalPrice = () => {
    let totalPrice = 0;
    let cur;
    if (items.length > 0) {
      cur = items[0].total.replace(/\s/g, "").slice(-3);
      items.forEach((item) => {
        const number = Number(
          item.total.replace(/\s/g, "").replaceAll("&nbsp;", "").slice(0, -3)
        );
        totalPrice += number;
      });
    }

    return `${numberWithSpaces(totalPrice)} ${cur ? cur : ""}`;
  };

  const getTotalCount = () => {
    let count = 0;
    items.forEach((item) => (count += item.count));
    return count;
  };

  const getTotalWeight = () => {
    let weight = 0;
    items.forEach((item) => (weight += item.weight));

    return `${Math.floor((weight / 1000) * 10) / 10}`;
  };

  return (
    <div className="shop-cart__form">
      <div className="shop-cart__sub-title">Ваш заказ</div>
      <div className="shop-cart__form__item shop-cart__form__count">
        <div className="shop-cart__form__text">Выбрано товаров:</div>
        <div className="shop-cart__form__value">{getTotalCount()} шт.</div>
      </div>
      <div className="shop-cart__form__item shop-cart__form__wt">
        <div className="shop-cart__form__text">Вес заказа:</div>
        <div className="shop-cart__form__value">{getTotalWeight()} кг.</div>
      </div>
      <div className="shop-cart__form__item shop-cart__form__total">
        <div className="shop-cart__form__text">Итого:</div>
        <div
          className="shop-cart__form__value"
          dangerouslySetInnerHTML={{ __html: getTotalPrice() }}
        ></div>
      </div>
      <Link href="/order" className="btn">
        Оформить заказ
      </Link>
    </div>
  );
}
