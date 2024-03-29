"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./SelectList.module.css";
import useOutsideRef from "@/hooks/useOutsideRef";

interface Props {
  options: { name: string; link: string }[];
  returnSelected: (value: string | undefined) => void;
}

export default function SelectList({ options, returnSelected }: Props) {
  const wrapperRef = useRef(null);
  useOutsideRef(wrapperRef, handelClickOutside);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(options[0].name);

  function handelClickOutside() {
    setIsActive(false);
  }

  useEffect(() => {
    returnSelected(options.find((item) => item.name === selected)?.link);
  }, [selected]);

  return (
    <div
      className={`sort-select ${isActive ? styles.active : ""}`}
      ref={wrapperRef}
    >
      <div className={`custom-select ${styles.customSelect}`}>
        Сортировка:
        <span>{selected}</span>
      </div>
      <select
        id="sort"
        className={styles.select}
        defaultValue={0}
        onClick={() => {
          setIsActive(!isActive);
        }}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSelected(e.target.value);
        }}
      >
        <option disabled>Выберите фильтр</option>
        {options.map((option) => (
          <option key={option.name} data-info={option}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
