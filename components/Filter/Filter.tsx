"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import FilterRange from "./FilterRange/FilterRange";

interface Checkbox {
  id: string;
  title: string;
  type: string;
  options: { title: string; id: string }[];
  value: { id: string; isChecked: boolean }[];
  min?: number | undefined;
  max?: number | undefined;
}

interface Range {
  id: string;
  title: string;
  type: string;
  min: number;
  max: number;
  value: { min: number | string; max: number | string };
  options?: { title: string; id: string }[] | undefined;
}

interface Props {
  filters: Array<Range | Checkbox>;
}

export default function Filter({ filters }: Props) {
  const TData: any = {};
  filters.forEach((filter) => {
    TData[filter.id] = filter.value;
  });

  const [data, setData] = useState({ ...TData });
  const refButton = useRef<HTMLDivElement>(null);
  const refFilter = useRef<HTMLDivElement>(null);

  const createOnChange = (field: string) => {
    return (
      value: { id: string; isChecked: boolean }[] | { min: number; max: number }
    ) => {
      setData({ ...data, [field]: value });
      refButton.current !== null && refButton.current.classList.add("active");
    };
  };

  const handleScroll = () => {
    if (refFilter.current !== null && refButton.current !== null) {
      const rect = refFilter.current.getBoundingClientRect();
      const body = document.body;
      const docEl = document.documentElement;
      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      const clientTop = docEl.clientTop || body.clientTop || 0;
      const top = rect.top + scrollTop - clientTop;

      if (
        top +
          refFilter.current.offsetHeight -
          (window.innerHeight + window.scrollY) +
          70 <
        0
      ) {
        refButton.current.classList.add("posAbs");
      } else {
        refButton.current.classList.remove("posAbs");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="filter" ref={refFilter}>
      <div className={`filter-apply posAbs`} ref={refButton}>
        Применить
      </div>
      <div className="filter__title">
        Фильтр
        <span
          onClick={() => {
            window.location.reload();
          }}
        >
          Очистить
        </span>
      </div>

      {filters.map((filter) =>
        filter.type === "checkbox" ? (
          <div key={filter.id} className="filter__checkboxs">
            <div className="filter__sub-title">{filter.title}</div>
            {filter.options?.map((option: any, index: number) => (
              <FilterCheckbox
                key={index}
                isChecked={data[filter.id][index].isChecked}
                data={data[filter.id]}
                index={index}
                onChange={createOnChange(filter.id)}
              >
                {option.title}
              </FilterCheckbox>
            ))}
          </div>
        ) : (
          <FilterRange
            key={filter.id}
            max={filter.max ? filter.max : 0}
            min={filter.min ? filter.min : 0}
            value={{
              min: data[filter.id].min,
              max: data[filter.id].max,
            }}
            onChange={createOnChange(filter.id)}
          >
            {filter.title}
          </FilterRange>
        )
      )}
    </div>
  );
}
