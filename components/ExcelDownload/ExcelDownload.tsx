"use client";
import {
  Download,
  ExcelCaption,
  ExcelIcon,
  StyledExcel,
} from "./ExcelDownload.style";
import icon from "@/public/img/icons/msexcel.svg";
import { ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

export default function ExcelDownload({ link, children }: Props) {
  return (
    <StyledExcel>
      <ExcelIcon src={icon} alt="Excel SpreadSheet" width={94} height={94} />
      <ExcelCaption>
        <Download download href={link}>
          Скачать
        </Download>{" "}
        {children}
      </ExcelCaption>
    </StyledExcel>
  );
}
