import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import styles from "./page.module.css";
import FeedBackForm from "@/components/FeedBackForm/FeedBackForm";

export default function Diallers() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Дилерам"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="dealers wrap">
        <h1 className="title">Дилерам</h1>
        <div className="dealers__content">
          <p>
            Производитель оборудования <b>AIRSYST</b> открыт для сотрудничеста.
            Наша компания готова предложить лучшие условия по работе с дилерами:
          </p>
          <ul>
            <li>
              Наличие генераторов азота и кислорода на складе или производство
              отсутствующих моделей за 10 дней
            </li>
            <li>
              Наличие компрессоров, воздуходувок, осушителей и ресиверов на
              складе. В случае отсутствия запрошенной модели, гарантируем
              изготовление в течение 15 календарных дней
            </li>
            <li>Гибкую систему скидок</li>
            <li>Техническую поддержку по Вашим проектам</li>
            <li>
              Резервирование проекта за дилером, что позволит безопасность
              проекта и сконцентрироваться на работе с клиентом
            </li>
            <li>Наличие сертификатов на весь модельный ряд</li>
            <li>
              Гарантийную и послегарантийную сервисную поддержку, а также
              поставку запасных частей
            </li>
            <li>Обучение Ваших сотрудников</li>
            <li>Выезд наших сервисных инженеров для запуска оборудования</li>
            <li>Выплата годовых бонусов при выполнении планов продаж</li>
            <li>
              Эксклюзивные права на территорию (оговаривается персонально)
            </li>
          </ul>

          <p>
            Мы нацелены на долгосрочное и взаимовыгодное сотрудничество. Станьте
            частью большой семьи AIRSYST. Вместе мы сможем сделать мир лучше!
          </p>
        </div>
        <div className="dealers__feedback">
          <FeedBackForm url="post" />
        </div>
      </section>
    </main>
  );
}
