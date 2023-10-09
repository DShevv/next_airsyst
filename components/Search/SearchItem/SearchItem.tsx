import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  item: {
    url: string;
    image: StaticImageData;
    title: string;
    art: string;
    price: string;
  };
}

export default function SearchItem({ item }: Props) {
  return (
    <Link href={item.url} className="search__item">
      <Image src={item.image} alt="" width={132} height={89} />
      <div className="search__info">
        <div className="search__name">{item.title}</div>
        <div className="search__sku">Артикул: {item.art}</div>
      </div>
      <div className="search__price">{item.price}</div>
    </Link>
  );
}
