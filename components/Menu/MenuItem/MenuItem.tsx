"use client";
import { usePathname } from "next/navigation";
import { StyledItem, StyledLink } from "./MenuItem.style";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  to: string;
}

export default function MenuItem({ children, to }: Props) {
  const path = usePathname();
  return (
    <StyledItem>
      <StyledLink href={`/cabinet/${to}`}>{children}</StyledLink>
    </StyledItem>
  );
}
