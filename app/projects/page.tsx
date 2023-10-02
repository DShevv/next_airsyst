import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import SelectList from "@/components/SelectList/SelectList";
import Image from "next/image";
import air from "@/public/img/images/airsyst.svg";
import volk from "@/public/img/images/ВКМК.jpg";

export default function Projects() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Наши проекты"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <SelectList
          options={[
            { name: "Все проекты", link: "" },
            { name: "Сервис", link: "repair" },
            { name: "Продажи", link: "sell" },
          ]}
        />
        <div className="projects__items">
          <div className="projects__item">
            <div className="projects__preview">
              <Image width={255} height={300} alt="" src={volk} />
              <Image
                width={100}
                height={30}
                alt=""
                className="projects__manufacturer"
                src={air}
              />
            </div>
            <div className="projects__content">
              <div className="projects__date">
                <div className="projects__day">15</div>
                <div className="project__small-date">
                  <div className="projects__month">августа</div>
                  <div className="projects__year">2023</div>
                </div>
              </div>
              <div className="projects__customer">
                ОАО &quot;Волковысский мясокомбинат&quot; (Беларусь)
              </div>
              <div className="projects__name">
                Азотная станция GN-400 для упаковки продуктов питания
              </div>
              <div className="projects__descr">
                В августе 2023 был подписан контракт на поставку азотной
                станции, предназначеной для упаковки пищевых продуктов.
                Особенность станции заключается в том, что в линию упаковки
                исключена возможность попадания некондиционного азота чистотой
                менее 99,999%. Благодаря уникальным технологиям станция может
                производить азот чистотой 99,9999% без дополнительной очистки.
                Контролировать чистоту газа на протяжении всего рабочего цикла.
                Автоматическая система сброса некондиционного азота позволяет
                выдерживать самые высокие стандарты при производстве продукции.
                Планируемый срок ввода вэксплуатацию - середина октября 2023. По
                результатам запуска мы добавим видеоотчет о работе станции.
              </div>
              <a href="/proekt/100/" className="btn">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
