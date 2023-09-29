import MainSlider from "@/components/MainPage/MainSlider";
import Products from "@/components/MainPage/Products";
import SertifikatesSlider from "@/components/SertifikatesSlider";

export default function Home() {
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
    </main>
  );
}
