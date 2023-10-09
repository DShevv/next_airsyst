"use client";
import icon from "@/public/img/icons/search.svg";
import test from "@/public/img/images/AS4-TC.jpg";
import Image from "next/image";
import { FormEvent, useEffect, useState, useTransition } from "react";
import SearchItem from "./SearchItem/SearchItem";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.currentTarget.value);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search !== "") {
        setIsLoading(true);
      }

      //! search querry
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Введите серийный номер"
        value={search}
        onChange={handleSearch}
      />
      <div className="search__btn">
        <Image src={icon} width={56} height={40} alt="" />
      </div>
      <div className={`search__result searching ${isLoading && "active"}`}>
        <div className="box loader">
          <div className="container">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
        {isLoading && (
          <SearchItem
            item={{
              url: "cock",
              image: test,
              title: "ВИНТОВОЙ КОМПРЕССОР AS-4TC AIRSYST",
              art: "AS8742",
              price: "2 972 300 KZT",
            }}
          />
        )}
      </div>
    </div>
  );
}
