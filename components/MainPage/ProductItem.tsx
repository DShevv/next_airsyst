import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  image: StaticImageData;
  companies: string[];
}

export default function ProductItem({ href, image, title, companies }: Props) {
  while (companies && companies.length < 6) {
    companies.forEach((company) => companies.push(company));
  }
  return (
    <Link href={href} className="bid__item">
      <div className="bid__preview">
        <Image
          className="lazyload"
          src={image}
          fill
          alt={title}
          sizes="(max-width: 1024px) 30vw, (max-width: 640px) 100%"
        />
        <h2 className="bid__name bid__name_first">{title}</h2>
      </div>
      <div className="bid__company">
        <div className="bid__company__items">
          {companies &&
            companies.map((company, index) => {
              return (
                <Image
                  key={index}
                  src={"https://airsyst.kz/" + company}
                  alt=""
                  height={20}
                  width={85}
                />
              );
            })}
        </div>
      </div>
    </Link>
  );
}
