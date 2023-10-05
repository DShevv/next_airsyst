"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useRef } from "react";
import close from "@/public/img/icons/close.svg";
import Image from "next/image";
import useOutsideRef from "@/hooks/useOutsideRef";

interface Props {
  image: string;
}

export default function ImageModal({ image }: Props) {
  const router = useRouter();
  const ref = useRef(null);
  const handleClose = () => {
    router.back();
  };
  useOutsideRef(ref, handleClose);

  return (
    <div className="modal active">
      <div className="certificates-form active" ref={ref}>
        <div className="close">
          <Image
            src={close}
            width={29}
            height={29}
            alt=""
            onClick={handleClose}
          />
        </div>
        <Image
          className="form-img"
          width={632}
          height={975}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}
