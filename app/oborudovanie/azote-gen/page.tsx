import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import n2 from "@/public/img/images/Group 178 1.png";
import gen from "@/public/img/images/Group 184.png";
import gen1 from "@/public/img/images/gen-item-1.jpg";
import gen2 from "@/public/img/images/gen-item-2.jpg";
import gen3 from "@/public/img/images/gen-item-3.jpg";
import pagegen1 from "@/public/img/images/page-gen-bot-1.jpg";
import pagetext from "@/public/img/images/page-gen-text-image.jpg";
import blokinfo from "@/public/img/images/block-info.png";
import best from "@/public/img/images/Group 180.png";
import nine from "@/public/img/images/999999ru 1.png";
import asys from "@/public/img/images/azotsistem-3 1 1.png";
import nitro from "@/public/img/images/ekran-scaled 1.jpg";
import redurant from "@/public/img/images/redundant 1.jpg";
import blokwaf from "@/public/img/images/blokvalf 1 1.png";
import vara from "@/public/img/images/saflikgarantisiru 1.jpg";
import service from "@/public/img/images/724tr 1.jpg";
import factor from "@/public/img/images/screen-shot-2022-02-25-at-212239-copy 1.jpg";
import garant from "@/public/img/images/servis-1 1.jpg";
import endu from "@/public/img/images/endustri40ru 1.jpg";
import kamen from "@/public/img/images/aktifkarbon-1 1.jpg";
import TabsPanel from "@/components/TabsPanel/TabsPanel";
import table from "@/public/img/images/eng-1500x1024-n2.jpg";
import ni1 from "@/public/img/images/nitro-1.jpg";
import ni2 from "@/public/img/images/nitro-4.jpg";
import ni3 from "@/public/img/images/nitro-6.jpg";
import ni4 from "@/public/img/images/nitro-8.jpg";
import ni5 from "@/public/img/images/nitro-9.jpg";
import ni6 from "@/public/img/images/nitro-16.jpg";
import AskForm from "@/components/AskForm/AskForm";

export default function Compressors() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Генераторы азота"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <h1 className="title air">Генераторы азота</h1>
      <div className="page-gen-text wrap">
        Рады предложить наш премиальный продукт - адсорбционные генераторы азота
        по технологии PSA от AIRSYST. Серия GN это: быстрая поставка под ключ;
        удаленное управление; немецкие комплектующие (SIEMENS, BURKERT,
        SCHNAIDER, BASF итд). Оцените лучшие цены в премиальном сегменте и
        высочайшее качество от AIRSYST. Гарантия до 5 лет.
      </div>
      <section className="page-gen-img">
        <Image src={n2} alt="" width={1903} height={480} />
      </section>
      <section className="page-gen-info wrap">
        <Image src={gen} alt="генератор азота" width={370} height={635} />
        <h2 className="page-gen-info__text">
          <p>
            Генераторы азота от AIRSYST используют технологию PSA и способны
            производить газ с чистотой до 99,9999% (1 ppm) и объемом от 0,5 до
            5000 Нм3/ч. Доступно более 30 моделей для выбора.
          </p>
          <p>
            С 2005 года AIRSYST является признанным лидером в отрасли и
            установил более 500 систем по всему миру.
          </p>
          <p>
            Новейшие генераторы азота серии GN от AIRSYST, благодаря
            запатентованной вихревой технологии, обеспечивают более эффективное
            использование CMS (углеродного молекулярного сита) для более
            эффективного разделения воздуха. Это позволяет генераторам азота
            AIRSYST иметь наименьшее потребление сжатого воздуха в мире.
          </p>
          <p>
            Благодаря такой эффективности, генераторы азота AIRSYST позволяют
            использовать меньшие компрессоры, что в свою очередь приводит к
            меньшему потреблению энергии.
          </p>
          <p>
            С генераторами азота AIRSYST NITROGEN GENERATOR SYSTEMS вы можете
            производить свой азот и забыть о расходах на покупку баллонов. Вы
            можете получить нужное количество газа с необходимой чистотой, при
            требуемом давлении (до 200 бар) и под вашим контролем. Конструкция
            каждого генератора азота рассчитана на круглосуточную работу и
            оснащена функцией автоматического запуска и остановки, которая
            позволяет управлять производством азота в автоматическом режиме в
            зависимости от потребностей производства.
          </p>
        </h2>
      </section>
      <section className="page-gen-block wrap">
        <div className="page-gen__items" id="page-gen__items-1">
          <div className="page-gen__item">
            <div className="page-gen__item__name">Стандартный</div>
            <Image src={gen1} alt="" width={270} height={267} />
          </div>
          <div className="page-gen__item">
            <div className="page-gen__item__name">Модульное исполнение</div>
            <Image src={gen2} alt="" width={370} height={267} />
          </div>
          <div className="page-gen__item">
            <div className="page-gen__item__name">Исполнение в контейнере</div>
            <Image src={gen3} alt="" width={470} height={267} />
          </div>
        </div>
        <div className="page-gen__items" id="page-gen__items-2">
          <div className="page-gen__item">
            <div className="page-gen__item__name">
              Оборудование получения сверхчистого азота CATOX
            </div>
            <Image src={pagegen1} alt="" width={770} height={456} />
          </div>
        </div>
        <div className="page-gen-ti">
          <div className="page-gen-text">
            Конечная цель нашей компании - обеспечить нашим клиентам максимально
            высокое качество продукции и быструю поставку генераторов азота. Мы
            имеем на производстве более 50 моделей генераторов азота и кислорода
            в разных стадиях готовности.{" "}
            <strong>
              Мы также гарантируем максимально короткий срок отгрузки - всего 3
              дня!
            </strong>
            Перед отправкой продукции наши специалисты проводят 100%
            тестирование на специальных стендах, чтобы убедиться в ее надежности
            и безопасности. Чтобы обеспечить дополнительную уверенность нашим
            клиентам в качестве наших генераторов азота, мы сотрудничаем с
            лучшими в своей отрасли поставщиками и используем только самые
            современные технологии и материалы при производстве нашей продукции
            (Siemens, BASF, BURKERT, Schneider и др). Наши сервисные специалисты
            запустят станцию и обучат Ваш персонал.
          </div>
          <Image
            src={pagetext}
            alt=""
            width={670}
            height={429}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-gen-text">
          <p>
            Генераторы азота AIRSYST PSA производят газовый азот из сжатого
            воздуха на месте работы и являются экономически выгодным, надежным и
            безопасным решением по сравнению с традиционными источниками азота,
            такими как баллоны. Конструкция генераторов предназначена для
            круглосуточной работы и оборудована функцией автоматического запуска
            и остановки, позволяющей пользователю запускать и останавливать
            генератор автоматически в зависимости от потребности в азоте.
          </p>
          <p>
            Новые генераторы азота серии GN от AIRSYST используют
            запатентованную вихревую технологию, которая обеспечивает более
            эффективное разделение воздуха и более эффективное использование CMS
            (углеродного молекулярного сита). Это позволяет генераторам азота от
            AIRSYST быть одними из лучших в мире по наименьшему потреблению
            сжатого воздуха и электроэнергии.
          </p>
        </div>
        <div className="page-gen-ti">
          <div className="page-gen-text">
            <p>
              <strong>
                Используйте меньшие компрессоры, потребляйте меньше энергии
                с&nbsp;генератором азота AIRSYST.
              </strong>
            </p>
            <p>
              <strong>
                Вы&nbsp;можете производить свой собственный азот с&nbsp;помощью
                AIRSYST NITROGEN GENERATOR SYSTEMS и&nbsp;можете забыть
                о&nbsp;расходах на&nbsp;покупку баллона или&nbsp;жидкого азота!
              </strong>
            </p>
            <p>Кроме того;</p>
            <p></p>
            <ul>
              <li> В&nbsp;необходимом вам&nbsp;количестве</li>
              <li>
                Чистота, необходимая для&nbsp;вашего производственного процесса
              </li>
              <li>При&nbsp;требуемом давлении</li>
              <li>Под&nbsp;вашим контролем…</li>
            </ul>
            <p></p>
          </div>
          <Image src={blokinfo} alt="" width={670} height={346} />
        </div>
      </section>
      <section className="page-gen-small-img wrap">
        <Image src={best} alt="" width={1165} height={516} />
      </section>
      <section className="page-gen-clear wrap">
        <h3 className="page-gen-clear__text">
          <p>
            <b>Вы покупаете не только баллон с азотом или жидкий азот, но и:</b>
          </p>
          <ul>
            <li>Проблемы безопасности из-за высокого давления в цилиндрах</li>

            <li>Аренда баллона/бака с жидким азотом</li>

            <li>Транспортные расходы</li>

            <li>Расходы на внутренние закупки</li>

            <li>
              Трудозатраты и риски для баллона при погрузке-разгрузке и
              транспортировке.
            </li>

            <li>
              Утечка 10-15% азота из-за температуры и внутреннего давления в
              баке с жидким азотом
            </li>

            <li>Колебания давления газообразного азота при замене баллона!</li>
          </ul>
        </h3>
        <Image src={nine} alt="" width={255} height={255} />
      </section>
      <section className="page-gen-small-img wrap">
        <Image src={asys} alt="" width={1165} height={265} />
        <div className="page-gen-small-img__legend">
          <span>1 - Винтовой воздушный компрессор</span>
          <span>2 - Сепаратор воды и фильтр твердых частиц</span>
          <span>3 - Осушитель сжатого воздуха</span>
          <span>4 - Башня с активированным углем</span>
          <span>5 - Фильтр твердых частиц</span>
          <span>6 - Пылевой фильтр</span>
          <span>7 - Воздушное судно</span>
          <span>8 - Автоматический слив конденсата</span>
          <span>9 - Генератор азота</span>
          <span>10 - Буферный сосуд генератора азота</span>
          <span>11 - Комплект распределения азота</span>
          <span>12 - Бустерный компрессор азота</span>
          <span>13 - Связка азота</span>
          <span>14 - Процесс</span>
        </div>
      </section>
      <section className="page-gen-our-char wrap">
        <h2 className="sub-title">НАШИ ПРЕВОСХОДНЫЕ ХАРАКТЕРИСТИКИ</h2>
        <div className="page-gen-our-char__items">
          <div className="page-gen-our-char__item">
            <Image src={nitro} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Сенсорная панель управления</b>
              </p>
              <p>
                <span> 5″ — 10″ сенсорный цветной экран</span>
                <span> 16 языковых вариантов</span>
                <span> 14 входов датчиков</span>
                <span> Долговечный циркониевый кислородный датчик</span>
                <span> Modbus/Profibus/RMB</span>
                <span> Стандарты защиты IP55</span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={redurant} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Технология резервного клапана</b>
              </p>
              <p>
                <span> Комплект запасных клапанов</span>
                <span> Гарантия непрерывного производства</span>
                <span> Простота обслуживания</span>
                <span> Функция простого управления</span>
                <span> Герметичное соединение клапана</span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={blokwaf} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Технология запорной арматуры AISI 316</b>
              </p>
              <p>
                <span> Высококачественная нержавеющая сталь</span>
                <span> Пневматическое управление</span>
                <span> Нет&nbsp;необходимости в&nbsp;обслуживании</span>
                <span> Компактная моноблочная конструкция</span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={vara} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Технология Autopure</b>
              </p>
              <p>
                <span> Непрерывный контроль чистоты</span>
                <span> Гарантия чистоты</span>
                <span> Клапан контроля чистоты</span>
                <span> Предохранительный клапан низкой чистоты</span>
                <span> Линия дополнительного контроля чистоты</span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={service} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Круглосуточная сервисная поддержка</b>
              </p>
              <p>
                <span> Экспертная техническая служба</span>
                <span> Техническая поддержка через Интернет</span>
                <span> Установка и услуги супервайзера</span>
                <span> Быстрое и эффективное вмешательство</span>
                <span> 10-летняя гарантия на запасные части</span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={factor} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Низкий воздушный фактор</b>
              </p>
              <p>
                <span> Вихревая технология</span>
                <span> Самый низкий фактор воздуха в мире</span>
                <span> Расход воздуха в необходимом объеме</span>
                <span>
                  {" "}
                  Производство азота при высокой скорости потока с меньшим
                  компрессором
                </span>
                <span>
                  {" "}
                  Низкое энергопотребление, экономичное производство азота
                </span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={garant} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Низкие затраты на эксплуатацию и техническое обслуживание</b>
              </p>
              <p>
                <span> Длительный период обслуживания</span>
                <span> Высококачественное оборудование</span>
                <span> Низкие затраты на запасные части и обслуживание</span>
                <span>
                  {" "}
                  Не требующая обслуживания выхлопная и клапанная техника
                </span>
                <span>
                  {" "}
                  Низкое энергопотребление, экономичное производство азота
                </span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={endu} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>Индустрия 4.0</b>
              </p>
              <p>
                <span>
                  {" "}
                  Modbus/Profibus/RMB/Ethernet доступ и возможности удаленного
                  управления
                </span>
                <span>
                  {" "}
                  Удаленный доступ через приложения на базе Android и IOS
                  благодаря модулю GSM
                </span>
                <span>
                  {" "}
                  Единая точка управления системным оборудованием, таким как
                  компрессор, осушитель, генератор азота, бустер и фильтры
                </span>
              </p>
            </h3>
          </div>
          <div className="page-gen-our-char__item">
            <Image src={kamen} alt="" width={372} height={370} />
            <h3 className="page-gen-our-char__text">
              <p>
                <b>CMS высокого качества</b>
              </p>
              <p>
                <span> CMS немецкого производства</span>
                <span> 60 000 часов / 10 лет гарантии производительности</span>
                <span>
                  {" "}
                  Для сжатого воздуха достаточно точки росы 3°C, нет
                  необходимости в химическом осушителе
                </span>
                <span> Экологичность</span>
              </p>
            </h3>
          </div>
        </div>
        <h4 className="page-gen-text tac">
          <p>
            <a href="tel:+77026602047">Связаться с нами! +7 702 660 20 47</a>
          </p>
          <p>
            Будьте нашим клиентом, как в нашем списке рекомендаций. Покупайте
            решения, а не проблемы!
          </p>
        </h4>
      </section>
      <a href="/pdf/Airsyst N2.pdf" className="pdf-download btn wrap" download>
        Скачать каталог
      </a>
      <TabsPanel
        thumbs={["Модельный ряд", "Принцип работы", "Реализованные проекты"]}
      >
        <Image src={table} height={663} width={1135} alt="" />
        <div className="page-gen-clear-text__items">
          <h3 className="page-gen-clear-text__item">
            <p>
              Генераторы азота AIRSYST используют технологию PSA для
              производства газообразного азота из воздуха.
            </p>
            <p>
              Генераторы азота AIRSYST состоят из двух резервуаров, содержащих
              УМС (углеродное молекулярное сито). Воздух под давлением, проходя
              через оборудование кондиционирования воздуха, поступает под первый
              бак генератора азота, проходит через все УМС в баке и в чистом
              виде направляется над генератором в бак запаса азота. При этом
              кислород, аргон, окись углерода и другие газы, захваченные УМС,
              выбрасываются в атмосферу через выхлопные газы. После завершения
              работы первого бака в интервале времени, заданном сенсорной
              панелью управления, кондиционированный воздух поступает под второй
              бак, проходит через всю УМС и через генератор в чистом виде
              направляется в бак запаса азота. Таким образом, бесперебойное
              производство газообразного азота обеспечивается за счет тандемной
              (синхронной) работы двух резервуаров, заполненных УМС.
            </p>
          </h3>
        </div>
        <div className="card__gallery">
          <Image src={ni1} height={277} width={369} alt="" placeholder="blur" />
          <Image src={ni2} height={277} width={369} alt="" />
          <Image src={ni3} height={277} width={369} alt="" />
          <Image src={ni4} height={277} width={369} alt="" />
          <Image src={ni5} height={277} width={369} alt="" />
          <Image src={ni6} height={277} width={369} alt="" />
        </div>
      </TabsPanel>
      <section className="feedback wrap">
        <AskForm url="/ask" />
      </section>
    </main>
  );
}
