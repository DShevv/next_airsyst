import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import TabsPanel from "@/components/TabsPanel/TabsPanel";
import AskForm from "@/components/AskForm/AskForm";
import n2 from "@/public/img/images/Group 177 1.png";
import chart from "@/public/img/images/hidrojentabloeng 1.jpg";
import h2 from "@/public/img/images/Group 175.png";

export default function Compressors() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Генераторы водорода"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <h1 className="title air">Генераторы водорода</h1>
      <section className="page-gen-img">
        <Image src={n2} alt="" width={1903} height={480} />
      </section>
      <section className="page-gen-info wrap">
        <Image src={h2} alt="" width={333} height={393} />
        <h2 className="page-gen-info__text">
          <p>
            Компания AIRSYST обеспечивает своих клиентов надежным, экономичным и
            долговечным <b>генератором водорода</b> на месте производства.
            Вместо того, чтобы удовлетворять свои потребности в водороде за счет
            высоких затрат на покупку баллонов, вы можете поставить собственный
            водородный генератор и обеспечить производство на своем предприятии
            с гораздо более доступными затратами и повысить ценность своего
            бизнеса за счет периода окупаемости в 1-2 года.
          </p>
          <p>
            <b>Какая технология лучше всего подходит для моего бизнеса?</b>
          </p>
          <p>
            Компания AIRSYST предлагает своим клиентам две различные системы
            производства водорода с учетом возможностей использования водорода и
            дополнительных производственных возможностей. В то время как
            генераторы водорода, производимые методом электролиза, подходят для
            нужд в диапазоне от 0 до 100 м3/ч, ГЕНЕРАТОРЫ ВОДОРОДА SMR,
            работающие на природном газе, рекомендуются для нужд
            производительности более 100 м3/ч.
          </p>
        </h2>
      </section>
      <TabsPanel
        thumbs={[
          "Модельный ряд",
          "ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ",
          "ОБЛАСТИ ПРИМЕНЕНИЯ",
          "ПРЕИМУЩЕСТВА",
          "РЕГЛАМЕНТЫ ПРИМЕНЕНИЯ",
        ]}
      >
        <Image src={chart} height={1274} width={1135} alt="" />
        <h3 className="page-gen-clear-text__item">
          <p>
            <span>· Мощность производства водородного газа 1-320 Нм3/ч</span>
            <br />
            <span>
              · Трансформатор, блок управления, генератор водорода и очиститель
              работают в гармонии, не оказывая негативного влияния друг на друга
              в отдельных кабинах
            </span>
            <br />
            <span>
              · Запатентованные специальные башни для очистки водорода
            </span>
            <br />
            <span>
              · Высокоэффективные биполярные электролитические элементы с
              длительным сроком службы
            </span>
            <br />
            <span>· Стандартное давление на выходе при 5 бар</span>
            <br />
            <span>· Давление наполнения водородного баллона 150 бар</span>
            <br />
            <span>· Управление ПЛК Telemechanic M340</span>
            <br />
            <span>
              · Гарантия чистоты с датчиком и анализатором чистоты водорода
            </span>
          </p>
        </h3>
        <h3 className="page-gen-clear-text__item">
          <p>
            <span>
              · Охлаждение электрического генератора переменного тока на
              электростанциях
            </span>
            <br />
            <span>· В печах для термообработки</span>
            <br />
            <span>· Трубные, трубные и кабельные заводы</span>
            <br />
            <span>· Отжиг оцинкованного материала</span>
            <br />
            <span>· Заводы по производству плоского стекла</span>
            <br />
            <span>· Очистка аргона в воздухоразделительных установках</span>
            <br />
            <span>· Нагрев, покрытие и пайка</span>
            <br />
            <span>· Ювелирная промышленность</span>
          </p>
        </h3>
        <div className="page-gen-clear-text__items">
          <h3 className="page-gen-clear-text__item">
            <p>
              <span>· Непрерывное производство водорода 7/24</span>
              <br />
              <span>
                · Экономичные производственные затраты, экономия затрат до 80%
              </span>
              <br />
              <span>· Продвинутые технологии</span>
              <br />
              <span>· Надежный</span>
              <br />
              <span>· Простое использование</span>
              <br />
              <span>· Полностью автоматическая работа</span>
              <br />
              <span>· Чистота водорода до 99 999%</span>
              <br />
              <span>· Рабочее давление 1-300 бар</span>
            </p>
          </h3>
        </div>
        <div className="page-gen-clear-text__items">
          <h3 className="page-gen-clear-text__item">
            <p>
              <span>· 2006/42/EC Регламент машинного оборудования</span>
              <br />
              <span>
                · 2014/30/ЕС Регламент по электромагнитной совместимости
              </span>
              <br />
              <span>· 2014/35/EC Регламент низкого напряжения</span>
              <br />
              <span>
                · 2014/29/EC Простое правило для сосудов под давлением
              </span>
              <br />
              <span>· Регламент 2014/68/EC PED</span>
              <br />
              <span>
                · EN 60204-1 Правила безопасности машин и электрооборудования
              </span>
              <br />
              <span>· EN 60079-10 Классификация опасных зон</span>
            </p>
          </h3>
        </div>
      </TabsPanel>
      <section className="feedback wrap">
        <AskForm url="/ask" />
      </section>
    </main>
  );
}
