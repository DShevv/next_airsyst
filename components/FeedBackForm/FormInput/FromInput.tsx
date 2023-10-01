import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  className?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string | boolean) => void;
}

export default function FromInput({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
}
