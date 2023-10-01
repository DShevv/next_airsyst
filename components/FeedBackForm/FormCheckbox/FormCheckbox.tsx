import React, { ChangeEvent } from "react";

interface Props {
  className?: string;
  id: string;
  label: string;
  value: boolean;
  onChange: (value: boolean | string) => void;
}

export default function FormCheckbox({
  className,
  id,
  label,
  value,
  onChange,
}: Props) {
  return (
    <label htmlFor={id}>
      <input
        className={className}
        type="checkbox"
        id={id}
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.currentTarget.checked);
        }}
      />
      <span> {label}</span>
    </label>
  );
}
