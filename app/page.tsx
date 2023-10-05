import MainSlider from "@/components/MainPage/MainSlider";
import Products from "@/components/MainPage/Products";
import SertifikatesSlider from "@/components/SertifikatesSlider";
import ImageModal from "@/components/ImageModal/ImageModal";

interface Props {
  searchParams: Record<string, string | null | undefined>;
}

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;
  const imageUrl = searchParams?.image;

  return (
    <main>
      <section className="hero wrap">
        <h1 className="title">
          Производитель промышленного оборудования airsyst
        </h1>
        <MainSlider />
        <Products />
        <section className="reviews wrap">
          <h2 className="title">Сертификаты</h2>
          <SertifikatesSlider />
        </section>
      </section>
      {showModal && <ImageModal image={imageUrl as string} />}
    </main>
  );
}
