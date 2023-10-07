"use client";

import { useState } from "react";
import delivery from "@/public/img/icons/delivery.svg";
import warranty from "@/public/img/icons/warranty.png";
import basket from "@/public/img/icons/to-basket.svg";
import Image from "next/image";

interface Props {
  price: string;
  shipment: string;
  garant: string;
}

export default function ItemActions({ price, shipment, garant }: Props) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count !== 1) setCount(count - 1);
  };

  return (
    <div>
      <div className="card__price-and-delivery">
        <div className="card__price">
          <div className="catalog__price">{price}</div>
          <div className="catalog__delivery">срок поставки: 30 дней</div>
        </div>
        <div className="catalog__count">
          <div className="catalog__minus" onClick={decrement}>
            -
          </div>
          <input id="catalog-count" type="text" value={count} />
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
      <div className="btn to-shopping-cart">
        <Image alt="" src={basket} width={30} height={23} />В корзину
      </div>
    </div>
  );
}
