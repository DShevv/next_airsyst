import Image, { StaticImageData } from "next/image";

interface Props {
  href: string;
  title: string;
  image: StaticImageData;
  companies: StaticImageData[];
}

export default function ProductItem({ href, image, title, companies }: Props) {
  return (
    <a href={href} className="bid__item">
      <div className="bid__preview">
        <Image className="lazyload" src={image} fill alt={title} />
        <h2 className="bid__name bid__name_first">{title}</h2>
      </div>
      <div className="bid__company">
        <div className="bid__company__items">
          {companies.map((company, index) => {
            return <Image key={index} src={company} alt="" />;
          })}
        </div>
      </div>
    </a>
  );
}
