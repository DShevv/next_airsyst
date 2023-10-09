"use client";
import icon from "@/public/img/icons/close.svg";
import Image from "next/image";
import { FormEvent, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  max: number;
  min: number;
  value: { min: number; max: number };
  onChange: ({}: { min: number; max: number }) => void;
}

export default function FilterRange({
  children,
  max,
  min,
  value,
  onChange,
}: Props) {
  const [localValue, setValue] = useState(value);
  const [isUsed, setIsUsed] = useState({ min: false, max: false });

  return (
    <div className="filter__range" option-id="21">
      <div className="filter__sub-title">
        {children}
        <div className="close">
          <Image src={icon} alt="" width={31} height={31} />
        </div>
      </div>
      <div className="filter__inputs">
        <input
          type="number"
          name="min"
          minLength={min}
          maxLength={max}
          placeholder={`от (${min})`}
          value={isUsed.min ? localValue.min : ""}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setIsUsed({ ...isUsed, min: true });

            setValue({
              min: Number(e.currentTarget.value),
              max: localValue.max,
            });
          }}
          onBlur={(e: FormEvent<HTMLInputElement>) => {
            const newValue = Number(e.currentTarget.value);

            if (
              newValue >= min &&
              !isNaN(newValue) &&
              newValue <= localValue.max
            ) {
              onChange(localValue);
            } else {
              onChange({ ...value });
              setValue({ ...value, min: min });
              setIsUsed({ ...isUsed, min: false });
            }
          }}
        />
        <input
          type="number"
          name="max"
          minLength={min}
          maxLength={max}
          placeholder={`до (${max})`}
          value={isUsed.max ? localValue.max : ""}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            setIsUsed({ ...isUsed, max: true });

            setValue({
              min: localValue.min,
              max: Number(e.currentTarget.value),
            });
          }}
          onBlur={(e: FormEvent<HTMLInputElement>) => {
            const newValue = Number(e.currentTarget.value);
            if (
              newValue <= max &&
              !isNaN(newValue) &&
              newValue >= localValue.min
            ) {
              onChange(localValue);
            } else {
              onChange({ ...value });
              setValue({ ...value, max: max });
              setIsUsed({ ...isUsed, max: false });
            }
          }}
        />
      </div>
    </div>
  );
}
