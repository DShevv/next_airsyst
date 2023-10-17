"use client";

import { FormEvent, useState } from "react";
import delivery from "@/public/img/icons/delivery.svg";
import warranty from "@/public/img/icons/warranty.png";
import basket from "@/public/img/icons/to-basket.svg";
import Image from "next/image";
import { getItems, pushItems } from "@/utils/storage";
import data from "@/testData/main";

interface Props {
  price: string;
  shipment: string;
  garant: string;
  itemId: any;
  disabled?: boolean;
}

export default function ItemActions({
  price,
  shipment,
  garant,
  disabled,
  itemId,
}: Props) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count !== 1) setCount(count - 1);
  };

  const addToStore = () => {
    let items = getItems();

    const product = data.find((item) => item.id === itemId);
    console.log(product);

    if (items.find((item) => item.id === itemId)) {
      items = items.map((item) =>
        item.id === itemId ? { ...item, count: item.count + count } : item
      );
    } else {
      product !== undefined && items.push({ ...product, count: count });
    }
    pushItems(items);
  };

  return (
    <div>
      <div className="card__price-and-delivery">
        <div className="card__price">
          <div
            className="catalog__price"
            dangerouslySetInnerHTML={{ __html: price }}
          ></div>
          <div className="catalog__delivery">срок поставки: 30 дней</div>
        </div>
        <div className="catalog__count">
          <div className="catalog__minus" onClick={decrement}>
            -
          </div>
          <input
            id="catalog-count"
            type="text"
            value={count}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setCount(Number(e.currentTarget.value));
            }}
          />
          <div className="catalog__plus" onClick={increment}>
            +
          </div>
        </div>
      </div>
      <div className="card__delivery-and-warranty">
        <div className="card__delivery">
          <Image alt="" src={delivery} width={31} height={20} />
          Доставка <span>{shipment} дней</span>
        </div>
        <div className="card__warranty">
          <Image alt="" src={warranty} width={17} height={20} />
          Гарантия <span>{garant} месяцев</span>
        </div>
      </div>
      <div
        className={`btn to-shopping-cart ${disabled ? "btn-disabled" : ""}`}
        onClick={() => {
          !disabled && addToStore();
        }}
      >
        <Image alt="" src={basket} width={30} height={23} />
        {disabled ? "Под заказ" : "В корзину"}
      </div>
    </div>
  );
}
