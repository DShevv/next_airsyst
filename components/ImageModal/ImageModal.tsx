"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";
import close from "@/public/img/icons/close.svg";
import Image from "next/image";
import useOutsideRef from "@/hooks/useOutsideRef";

interface Props {
  image: string;
}

export default function ImageModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isActive = searchParams.get("modal");
  const image = searchParams.get("image");
  const ref = useRef(null);
  const handleClose = () => {
    router.back();
  };
  useOutsideRef(ref, handleClose);

  return (
    isActive && (
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
            src={image ? image : ""}
            alt=""
          />
        </div>
      </div>
    )
  );
}
