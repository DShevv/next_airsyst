"use client";
import React, { useCallback, useEffect, useState } from "react";
import arrow from "@/public/img/icons/to-Header.svg";
import Image from "next/image";

export default function ToHeader() {
  const [y, setY] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollY, scroll } = window;
    setY(scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      className={`to-header ${y > 300 ? "" : "hidden"}`}
      onClick={() => window.scroll(0, 0)}
    >
      <Image src={arrow} alt="" width={30} height={30} />
    </div>
  );
}
