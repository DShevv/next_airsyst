/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from "./Page.module.css";
import DeleteSelected from "@/components/DeleteSelected/DeleteSelected";
import { useState, useEffect } from "react";
import Image from "next/image";
import check from "@/public/img/icons/check.svg";
import CartItem from "@/components/CartItem/CartItem";
import CartTotal from "@/components/CartTotal/CartTotal";

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

interface CookieItem {
  id: string;
  title: string;
  price: string;
  count: number;
  image: string;
  link: string;
  weight: number;
}

function numberWithSpaces(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
}

const getTotal = (price: string, count: number): string => {
  const cur = price.replace(/\s/g, "").slice(-3);
  const number = Number(
    price.replace(/\s/g, "").replaceAll("&nbsp;", "").slice(0, -3)
  );
  return `${numberWithSpaces(number * count)} ${cur}`;
};

const setTestData = () => {
  const items: CookieItem[] = [
    {
      id: "1",
      title: "ВИНТОВОЙ КОМПРЕССОР AS-4TC AIRSYST",
      price: "3&nbsp;008&nbsp;820 KZT",
      count: 1,
      image: "https://airsyst.kz/media/equip_images/AS4-TC.jpg",
      link: "/oborudovanie/compressors/1",
      weight: 8200,
    },
    {
      id: "2",
      title: "ВИНТОВОЙ КОМПРЕССОР AS-4TC AIRSYST",
      price: "4&nbsp;008&nbsp;820 KZT",
      count: 2,
      image: "https://airsyst.kz/media/equip_images/AS4-TC.jpg",
      link: "/oborudovanie/compressors/1",
      weight: 4100,
    },
    {
      id: "3",
      title: "ВИНТОВОЙ КОМПРЕССОР AS-4TC AIRSYST",
      price: "6&nbsp;008&nbsp;820 KZT",
      count: 1,
      image: "https://airsyst.kz/media/equip_images/AS4-TC.jpg",
      link: "/oborudovanie/compressors/1",
      weight: 200,
    },
  ];

  localStorage.setItem("cart", JSON.stringify(items));
};

const pushItems = (items: Item[]) => {
  const storeItems: CookieItem[] = items.map((item) => ({
    ...item,
  }));

  localStorage.setItem("cart", JSON.stringify(storeItems));
};

const getItems = (): Item[] => {
  const cookieItems = localStorage.getItem("cart");
  const storedItems: CookieItem[] =
    cookieItems !== undefined && cookieItems !== null
      ? JSON.parse(cookieItems)
      : [];

  if (cookieItems && storedItems.length > 0) {
    const newItems = storedItems.map((item) => ({
      ...item,
      total: getTotal(item.price, item.count),
      isSelected: false,
    }));
    return newItems;
  }
  return [];
};

export default function Cart() {
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [items, setItems] = useState<Item[]>(getItems());

  useEffect(() => {
    const newItems = items.map((item) => ({
      ...item,
      isSelected: isSelectedAll,
    }));

    setItems(newItems);
  }, [isSelectedAll]);

  const createOnDelete = (id: string) => {
    return () => {
      const newItems = items.filter((item) => item.id !== id);
      document
        .querySelector(".shopping-cart")
        ?.setAttribute("attr-count", newItems.length.toString());
      setItems(newItems);
      pushItems(newItems);
    };
  };

  const createSetCount = (id: string) => {
    return (count: number) => {
      const newItems = items.map((item) =>
        item.id === id
          ? { ...item, count: count, total: getTotal(item.price, count) }
          : item
      );

      setItems(newItems);
      pushItems(newItems);
    };
  };

  const createSetIsSelected = (id: string) => {
    return (isSelected: boolean) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, isSelected: isSelected } : item
        )
      );
    };
  };

  const deleteSelectedItems = () => {
    const newItems = items.filter((item) => !item.isSelected);
    document
      .querySelector(".shopping-cart")
      ?.setAttribute("attr-count", newItems.length.toString());
    setItems(newItems);
    pushItems(newItems);
  };

  return (
    <main>
      <section className="shop-cart wrap">
        <h1 className="title">Корзина</h1>
        <div className="shop-cart__content">
          <div className={`shop-cart__head ${styles.head}`}>
            <div
              className={`filter__checkbox ${isSelectedAll && "active"}`}
              onClick={() => {
                setIsSelectedAll(!isSelectedAll);
              }}
            >
              <div className={`filter__check`}>
                <Image src={check} width={12} height={21} alt="" />
              </div>
              <span>Выбрать все</span>
            </div>
            <DeleteSelected
              onClick={() => {
                deleteSelectedItems();
              }}
            />
          </div>
          <div className="shop-cart__body">
            <div className="shop-cart__body__content">
              <div className="shop-cart__header">
                <div className="shop-cart__col"></div>
                <div className="shop-cart__col"></div>
                <div className="shop-cart__col">Наименование</div>
                <div className="shop-cart__col">Цена</div>
                <div className="shop-cart__col">К-во</div>
                <div className="shop-cart__col">Стоимость</div>
                <div className="shop-cart__col"></div>
              </div>
              <div className="shop-cart__items">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onDelete={createOnDelete(item.id)}
                    setCount={createSetCount(item.id)}
                    setIsSelected={createSetIsSelected(item.id)}
                  />
                ))}
              </div>
            </div>
            <CartTotal items={items} />
          </div>
        </div>
      </section>
    </main>
  );
}
