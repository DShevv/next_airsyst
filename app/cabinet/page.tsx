import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function page({ children }: Props) {
  return <div>{children}</div>;
}
