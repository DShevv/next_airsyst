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
        <SertifikatesSlider />
      </section>
    </main>
  );
}
