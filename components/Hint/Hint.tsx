import { ReactNode } from "react";
import { StyledHint } from "./Hint.style";
import icon from "@/public/img/icons/hint.svg";
import Image from "next/image";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Hint({ children, className }: Props) {
  return (
    <StyledHint className={className}>
      <Image src={icon} width={18} height={18} alt="" />
      {children}
    </StyledHint>
  );
}
