import icon from "@/public/img/icons/check.svg";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isChecked: boolean;
  index: number;
  data: { id: string; isChecked: boolean }[];
  onChange: (value: { id: string; isChecked: boolean }[]) => void;
}

export default function FilterCheckbox({
  data,
  index,
  children,
  isChecked,
  onChange,
}: Props) {
  return (
    <div
      className={`filter__checkbox ${isChecked && "active"}`}
      onClick={() => {
        data[index].isChecked = !isChecked;
        onChange(data);
      }}
    >
      <div className="filter__check">
        <Image src={icon} width={12} height={21} alt="" />
      </div>
      <span>{children}</span>
    </div>
  );
}
