import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import n2 from "@/public/img/images/Group 182.png";
import gen from "@/public/img/images/Group 185.png";
import blokinfo from "@/public/img/images/block-info-2.png";
import nine from "@/public/img/images/995ru 1.jpg";
import TabsPanel from "@/components/TabsPanel/TabsPanel";
import table from "@/public/img/images/eng-1500x1024-n2.jpg";
import ni1 from "@/public/img/images/nitro-1.jpg";
import ni2 from "@/public/img/images/nitro-4.jpg";
import ni3 from "@/public/img/images/nitro-6.jpg";
import ni4 from "@/public/img/images/nitro-8.jpg";
import ni5 from "@/public/img/images/nitro-9.jpg";
import ni6 from "@/public/img/images/nitro-16.jpg";
import standart from "@/public/img/images/o2-item-1.jpg";
import modul from "@/public/img/images/o2-item-2.jpg";
import container from "@/public/img/images/o2-item-3.jpg";
import all from "@/public/img/images/page-gen-text-image.jpg";
import cicle from "@/public/img/images/oksijenson-1 1 1.png";
import chart from "@/public/img/images/oxygen-chars.png";

import AskForm from "@/components/AskForm/AskForm";

export default function Compressors() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Генераторы кислорода"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <h1 className="title air">Генераторы кислорода</h1>
      <div className="page-gen-text wrap">
        AIRSYST - производственная компания, расположенная в Стамбуле (Турция).
        Мы изготавливаем генераторы кислорода PSA с чистотой 99% и
        производительностью до 400 м3/ч. Мы используем только премиальные
        комплектующие от немецких производителей (SIEMENS, BURKERT, SCHNAIDER,
        BASF итд). Скачайте каталог с полными данными данными.
      </div>
      <section className="page-gen-img">
        <Image src={n2} alt="" width={1903} height={480} />
      </section>
      <section className="page-gen-info wrap">
        <Image src={gen} alt="генератор кислорода" width={370} height={635} />
        <h2 className="page-gen-info__text">
          <p>
            <b>
              Производите собственный газообразный кислород, забудьте о расходах
              на покупку баллонов или жидкого кислорода!
            </b>
          </p>
          <p>
            Системы генераторов кислорода AIRSYST PSA производят кислород в виде
            газа из сжатого воздуха на месте, где они работают, и предлагают
            экономичное, непрерывное и безопасное решение по сравнению с
            традиционными источниками газообразного кислорода, такими как
            баллоны или криогенная жидкость. Наши генераторы кислорода доступны
            в 21 стандартной модели с производительностью 95% чистотой от 0,5 до
            2000 Нм3/ч. Конструкция рассчитана на круглосуточную работу. Каждый
            кислородный генератор оснащен функцией автоматического запуска и
            остановки, которая позволяет пользователю запускать и останавливать
            автоматически в соответствии с потреблением кислорода.
          </p>
          <p>
            <b>Почему генераторы кислорода AIRSYST?</b>
          </p>
          <p>
            <span>· Гарантия высокой чистоты</span>
            <span>
              · Низкое потребление воздуха и затраты на техническое
              обслуживание.
            </span>
            <span>· Простота использования и обслуживания</span>
            <span>· Цветной сенсорный экран</span>
            <span>
              · Мгновенный мониторинг и запись таких параметров, как чистота,
              давление и расход
            </span>
            <span>· Удаленное управление программным обеспечением</span>
            <span>
              · Не требующие обслуживания регулирующие клапаны из нержавеющей
              стали AISI316L
            </span>
            <span>· Полностью автоматический режим работы без оператора</span>
            <span>· Круглосуточная техническая поддержка.</span>
            <span>· Выбор модели Plug &amp; Play</span>
            <span>· Мобильная конструкция на салазках</span>
            <span>· Мобильный контейнерный дизайн</span>
            <span>· Наполнение баллона до 150 бар</span>
            <span>
              · Гарантия бесперебойного производства с резервной системой
              клапанов
            </span>
          </p>
        </h2>
      </section>
      <section className="page-gen-block wrap">
        <div className="page-gen-text">
          <p>
            Наши генераторы азота и кислорода разрабатывались немецкими
            инженерами, которые сотрудничали с производителем генераторов газов
            INMATEK. Мы взяли все передовые решения и внесли изменения с учетом
            многолетнего опыта эксплуатации такого оборудования. Мы производим
            генераторы кислорода в различных исполнениях:
          </p>
          <ul>
            <li>стандартные</li>
            <li>
              модульного исполнения (на одной платформе генератор, компрессор,
              осушитель, ресиверы и прочее оборудование)
            </li>
            <li>станции по производству кислорода в контейере</li>
            <li>передвижные станции по производству кислорода</li>
            <li>
              станции по производству азота для закачки в баллоны давлением до
              150 бар.
            </li>
            <li>станции по производству кислорода для больниц и госпиталей</li>
          </ul>
        </div>

        <div className="page-gen-ti">
          <div className="page-gen-text">
            <p>
              При необходимости получать чистый кислород, чистотой до 99,5% мы
              используем технологию UHP. Данное оборудование гарантирует
              стабильную чистоту кислорода, и постоянно контролирует %
              содержания кислорода. Если чистота кислорода не соответствует
              заданной оператором, не кондиционный газ будет выбрасываться в
              атмосферу; имеет TOUCH SCREEN контроллер и удаленное управление
              (MODBUS или ETHERNET); работает в полностью автоматическом режиме.
            </p>
          </div>
          <Image src={blokinfo} alt="" width={670} height={302} />
        </div>

        <div className="page-gen__items" id="page-gen__items-2">
          <div className="page-gen__item">
            <div className="page-gen__item__name">Стандартный</div>
            <Image src={standart} alt="" width={570} height={325} />
          </div>
          <div className="page-gen__item">
            <div className="page-gen__item__name">Модульное исполнение</div>
            <Image src={modul} alt="" width={570} height={325} />
          </div>
        </div>
        <div className="page-gen__items" id="page-gen__items-2">
          <div className="page-gen__item">
            <div className="page-gen__item__name">Исполнение в контейнере</div>
            <Image src={container} alt="" width={1170} height={647} />
          </div>
        </div>
        <div className="page-gen-ti">
          <div className="page-gen-text">
            Мы гарантируем наши клиентам высочайшее качество и поставку
            генераторов азота в самые короткие сроки. На нашем производстве мы
            имеем более 50 различных моделей генераторов азота и кислорода в
            наличии в различной стадии готовности.{" "}
            <strong>Максимальный срок отгрузки 3 дня!!!</strong> И да, мы
            тестируем 100% продукции на наших стендах, перед отгрузкой
            заказчикам.
          </div>
          <Image src={all} alt="" width={670} height={246} />
        </div>
      </section>
      <section className="page-gen-clear wrap">
        <h3 className="page-gen-clear__text">
          <p>
            <b>
              Вы покупаете не только кислородный баллон или жидкий кислород, но
              и:
            </b>
          </p>
          <p>
            <ul>
              <li>Проблемы безопасности из-за высокого давления в цилиндрах</li>

              <li>Аренда баллона/бака с жидким кислородом</li>

              <li>Транспортные расходы</li>

              <li>Расходы на внутренние закупки</li>

              <li>
                Трудозатраты и риски для баллона при погрузке-разгрузке и
                транспортировке.
              </li>

              <li>
                Утечка 10-15% азота из-за температуры и внутреннего давления в
                баке с жидким кислородом
              </li>

              <li>
                Колебания давления газообразного кислорода при замене баллона!
              </li>
            </ul>
          </p>
        </h3>
        <Image src={nine} alt="" width={255} height={255} />
      </section>
      <section className="page-gen-clear-text wrap">
        <div className="page-gen-clear-text__items">
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>Решение: системы генерации кислорода AIRSYST</b>
            </p>
            <p>
              <span>· В необходимом вам количестве</span>
              <br />
              <span>· Чистота 95% (чистота 99,5% с серией UHP)</span>
              <br />
              <span>· При требуемом давлении</span>
              <br />
              <span>· Под вашим контролем</span>
              <br />
              <span>
                · В ваших руках производить газообразный кислород с гораздо
                меньшими затратами.
              </span>
            </p>
          </h3>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>
                Мы очень хорошо знаем, чего вы ждете от генератора кислорода!
              </b>
            </p>
            <p>
              <span>· Сохраняет высокую чистоту</span>
              <br />
              <span>· Качественный, но экономичный</span>
              <br />
              <span>· Высокие технологии, но простые в использовании</span>
              <br />
              <span>· Долгий срок годности, но без проблем</span>
              <br />
              <span>· Техническое обслуживание, но круглосуточно</span>
              <br />
            </p>
          </h3>
        </div>
        <h4 className="page-gen-text">
          Благодаря технологии PSA, используемой СИСТЕМАМИ КИСЛОРОДНЫХ
          ГЕНЕРАТОРОВ AIRSYST, вы можете производить газообразный кислород с
          чистотой от 90% до 99,5% в диапазоне производительности от 0,5 до 2
          000 нм3 / ч.
        </h4>
      </section>
      <section className="page-gen-small-img wrap">
        <Image src={cicle} alt="" width={1165} height={306} />
        <div className="page-gen-clear-text__items">
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>Генераторы кислорода 95% AIRSYST</b>
            </p>
            <p>
              <span>
                · <b>Производительность:</b> 0,5 — 2000 Нм3/ч
              </span>
              <br />
              <span>
                · <b>Чистота:</b> 95%
              </span>
              <br />
              <span>
                · <b>Давление:</b> 1–150 бар изб.
              </span>
              <br />
              <span>
                · <b>Технология:</b> PSA (адсорбция при переменном давлении)
              </span>
              <br />
              <span>
                · <b>Производственная площадка:</b> Германия.
              </span>
            </p>
          </h3>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>Генераторы кислорода AIRSYST 99,5% UHP</b>
            </p>
            <p>
              <span>
                · <b>Производительность:</b> 0,5 — 1700 Нм3/ч
              </span>
              <br />
              <span>
                · <b>Чистота:</b> 99,5%
              </span>
              <br />
              <span>
                · <b>Давление:</b> 1–150 бар изб.
              </span>
              <br />
              <span>
                · <b>Технология:</b> DIA (разработанная идеальная адсорбция)
              </span>
              <br />
              <span>
                · <b>Производство:</b> Турция.
              </span>
            </p>
          </h3>
        </div>
        <h4 className="page-gen-text tac">
          <p>
            Мы готовы предложить вам нашу комбинацию превосходного генератора
            кислорода и опыта проекта и применения AIRSYST. <br />
            <a href="tel:+375333409070">Связаться с нами! +375 33 340 90 70</a>
          </p>
          <p>
            Будьте нашим клиентом, как в нашем списке рекомендаций. Покупайте
            решения, а не проблемы!
          </p>
        </h4>
      </section>
      <a href="/pdf/Airsyst O2.pdf" className="pdf-download btn wrap" download>
        Скачать каталог
      </a>
      <TabsPanel
        thumbs={[
          "Таблица продукции",
          "МЕДИЦИНСКИЕ ГЕНЕРАТОРЫ КИСЛОРОДА",
          "ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ",
        ]}
      >
        <Image src={chart} height={1274} width={1135} alt="" />
        <>
          <h3 className="card__text">
            <p>
              Использование генераторов кислорода в больницах увеличивается день
              ото дня. AIRSYST удовлетворяет потребность больниц в газообразном
              кислороде наиболее экономичным и надежным способом с помощью наших
              генераторов кислорода AIRSYST, признанных во всем мире.
            </p>
            <p>
              Медицинские генераторы кислорода AIRSYST, отличающиеся
              инновационным дизайном и энергосберегающими функциями,
              производятся в соответствии с международными медицинскими
              стандартами качества и стандартами ISO 13485:2016 и ISO
              7396-1:2016. У них есть документ 93/42/EEC о медицинских
              устройствах, который должен быть доступен для медицинских
              устройств. Кроме того, производство медицинского кислородного газа
              осуществляется в соответствии со стандартами Европейской
              Фармакопеи. Наши кислородные генераторы имеют промышленные
              сертификаты качества, такие как PED, ISO, CE. Сертификаты CE на
              все медицинские стандарты и продукты были сертифицированы
              международными организациями, такими как немецкий TÜV-SÜD,
              швейцарский SQS, IQNET. Сочетая высокое качество и инженерные
              решения, о чем свидетельствуют эти документы, AIRSYST принимает
              участие в медицинских проектах по всему миру.
            </p>
            <Image src={cicle} alt="" width={1165} height={306} />

            <p>
              Наши медицинские генераторы кислорода с высокой надежностью
              используются в больницах по всему миру. Вместе с генератором
              медицинского кислорода мы также поставляем всю систему для полного
              решения. Если вам нужен кислородный генератор и заправочная
              станция для заправки баллонов высокого давления, мы можем
              предложить нашу кислородную заправочную станцию.
            </p>
          </h3>
          <h3 className="card__text">
            <b>Особенности:</b>
          </h3>
          <div className="page-gen-clear-text__items">
            <h3 className="page-gen-clear-text__item">
              <p>
                <span>· Самостоятельная работа</span>
                <br />
                <span>· Автоматическая работа</span>
                <br />
                <span>· Подходит для 365 дней — 7/24</span>
                <br />
                <span>· Согласно ISO и Европейской фармакопее</span>
                <br />
                <span>· Сертификация MDD, PED и CE</span>
                <span>· Расход стандартной модели до 0,5 — 387 м3/ч</span>
                <span>· Низкое потребление энергии (1,0 кВт/м3)</span>
              </p>
            </h3>
            <h3 className="page-gen-clear-text__item">
              <p>
                <span>· Низкий уровень выбросов CO2</span>
                <br />
                <span>
                  · Прочная конструкция для тяжелых условий эксплуатации
                </span>
                <br />
                <span>· Качественные и прочные компоненты</span>
                <br />
                <span>· Система, монтируемая в контейнере</span>
                <br />
                <span>· Устанавливается на салазках</span>
                <br />
                <span>· Установка Plug &amp; Play</span>
                <br />
                <span>· Высококачественная сенсорная панель</span>
                <br />
                <span>· Индустрия 4.0 — дистанционное управление</span>
                <br />
              </p>
            </h3>
          </div>
        </>
        <>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>ТРЕБОВАНИЯ СЖАТИЯ ВОЗДУХА</b>
            </p>
            <p>
              <span>
                · <b>Диапазон темрератур:</b> +10 / +50˚C
              </span>
              <br />
              <span>
                · <b>Качество воздуха:</b> ISO 8573.1 Класс 1.4.1
              </span>
              <br />
              <span>
                · <b>Точка росы:</b> +3˚C
              </span>
            </p>
          </h3>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>УСЛОВИЯ ОКР. СРЕДЫ</b>
            </p>
            <p>
              <span>
                · <b>Диапазон темрератур:</b> +5 / +40˚C
              </span>
              <br />
              <span>
                · <b>Возможности:</b> -50 / +60˚C
              </span>
            </p>
          </h3>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</b>
            </p>
            <p>
              <span>
                · <b>Максимальное рабочее давление:</b> 10 бар
              </span>
              <br />
              <span>
                · <b>Параметры сети:</b> 230Вт, 50Гц/60Гц
              </span>
              <br />
              <span>
                · <b>Noise Level:</b> от 55 до макс. 85 ДБ(А)
              </span>
            </p>
          </h3>
          <h3 className="page-gen-clear-text__item">
            <p>
              <b>ДОПОЛНИТЕЛЬНЫЕ ПРЕИМУЩЕСТВА</b>
            </p>
            <p>
              <span>· Датчик точки росы</span>
              <br />
              <span>· Расходомер</span>
              <br />
              <span>· Profibus / Modbus передача данных</span>
              <br />
              <span>· GSM связь</span>
              <br />
              <span>· LAN</span>
              <br />
              <span>· RS 232</span>
              <br />
              <span>· Мобильные системы на шасси</span>
              <br />
              <span>· Контейнерные мобильные системы</span>
            </p>
          </h3>
        </>
      </TabsPanel>
      <section className="feedback wrap">
        <AskForm url="/ask" />
      </section>
    </main>
  );
}
