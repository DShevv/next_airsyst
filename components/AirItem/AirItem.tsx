"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  image: StaticImageData;
  title: string;
}

export default function AirItem({ href, image, title }: Props) {
  const path = usePathname();
  return (
    <Link href={`${path}/${href}`} className="air__item">
      <Image alt="" src={image} width={560} height={370} priority />
      <div className="air__name">{title}</div>
    </Link>
  );
}
