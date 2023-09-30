"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  image: StaticImageData;
  title: string;
}

export default function EquipmentItem({ href, image, title }: Props) {
  const path = usePathname();
  return (
    <Link href={`${path}/${href}`} className="equipment__item">
      <Image alt="" src={image} width={370} height={370} priority />
      <div className="equipment__name">{title}</div>
    </Link>
  );
}
