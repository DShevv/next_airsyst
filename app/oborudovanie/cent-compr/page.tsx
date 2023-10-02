import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import TabsPanel from "@/components/TabsPanel/TabsPanel";
import AskForm from "@/components/AskForm/AskForm";
import centefugal from "@/public/img/images/Centrifugal_Air_Compressor 2.jpg";
import centrefugalfull from "@/public/img/images/Certrifugal_Compressor_Detailed_Drawing 1.jpg";
import centrefugal1 from "@/public/img/images/Centrifugal_Air_Compressor_1101 (1) 1.jpg";
import centrefugal2 from "@/public/img/images/Centrifugal_Air_Compressor_1102 1.jpg";
import centrefugal3 from "@/public/img/images/Centrifugal_Air_Compressor_1103 1.jpg";
import centrefugal4 from "@/public/img/images/Centrifugal_Air_Compressor_1104 1.jpg";
import centrefugal5 from "@/public/img/images/Centrifugal_Air_Compressor_1106 1.jpg";
import centrefugal6 from "@/public/img/images/Centrifugal_Air_Compressor_1107 1.jpg";
import centrefugal7 from "@/public/img/images/Screenshot_1 1.jpg";

export default function Compressors() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Центробежные компрессоры"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <h1 className="title air">Центробежные компрессоры</h1>
      <div className="page-gen-text wrap">
        AIRSYST - официальный дилер компании DENAIR. Поставка ценртобежных
        компрессоров с рабочим давлением до 25 бар и производительностью до 1500
        м3 в минуту. Гарантия 24 месяца. Сервис.
      </div>
      <section className="centrifugal wrap">
        <Image src={centefugal} alt="" width={370} height={313} />
        <div className="centrifugal__text">
          <h1 className="centrifugal__title">
            Центробежные компрессоры DENAIR
          </h1>
          <div className="centrifugal__items">
            <div className="centrifugal__item">
              <div className="centrifugal__col">Рабочее давление:</div>
              <div className="centrifugal__col">
                <span>0.6-25</span>
                <span>8.7-362.5</span>
              </div>
              <div className="centrifugal__col">
                <span>[бар]</span>
                <span>[psig]</span>
              </div>
            </div>
            <div className="centrifugal__item">
              <div className="centrifugal__col">Производительность:</div>
              <div className="centrifugal__col">
                <span>50-1500</span>
                <span>1766-52991</span>
              </div>
              <div className="centrifugal__col">
                <span>[м³/мин]</span>
                <span>[cfm]</span>
              </div>
            </div>
            <div className="centrifugal__item">
              <div className="centrifugal__col">Мощность:</div>
              <div className="centrifugal__col">
                <span>300-2000</span>
                <span>400-2682</span>
              </div>
              <div className="centrifugal__col">
                <span>[кВт]</span>
                <span>[hp]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TabsPanel thumbs={["Информация о продукте", "ТЕХНИЧЕСКИЕ параметры"]}>
        <div>
          <Image
            src={centrefugalfull}
            height={1200}
            width={556}
            alt=""
            unoptimized
          />
          <h2 className="centrifugal__title-card">
            Центробежный воздушный компрессор. Преимущества:
          </h2>
          <div className="centrifugal__sub-title">
            01 динамический анализ импеллера
          </div>
          <div className="centrifugal__text">
            Анализируется валовая нагрузка и критическая скорость на импеллер.
            Гарантированно будет работать безопасно и надежно.
          </div>
          <Image
            src={centrefugal1}
            width={800}
            height={239}
            alt=""
            style={{ width: "auto" }}
          />
          <div className="centrifugal__sub-title">02 модальный анализ</div>
          <div className="centrifugal__text">
            Анализируются вибрации на высокой скорости вращения импеллера и
            дальнейшейшая регулировка, во избежании резонанса, что-бы обеспечить
            бесперебойную работу.
          </div>
          <Image src={centrefugal2} width={1135} height={242} alt="" />
          <div className="centrifugal__sub-title">
            03 анализ напряжение-деформациий импеллера
          </div>
          <div className="centrifugal__text">
            Импеллер внализирует на прочность, и подбтрая различные материалы и
            структуры, импеллерные части находятся под ограничением по
            безопасности, обеспечивая долгосрочную безопасную работу импеллера
            при высокоскоростном вращении.
          </div>
          <Image src={centrefugal3} width={1135} height={292} alt="" />
          <div className="centrifugal__sub-title">
            04 пневматическое проектирование
          </div>
          <div className="centrifugal__text">
            Базовый уровень модели рассчитывается и анализируется с помощью CFD
            для оптимизации формы и сопоставления лезвий, расширителей и улиток,
            а также постоянного повышения уровня пневматического дизайна для
            достижения большей эффективности и более широкого диапазона работы
          </div>
          <Image src={centrefugal4} width={1200} height={443} alt="" />
          <div className="page-gen-clear-text__item">
            <p>
              <b>Современный контроль</b>
            </p>
            <p>
              <span>
                · Стандартный 12-дюймовый сенсорный экран, компрессор все
                параметры можно просматривать, простой в эксплуатации;
              </span>
              <br />
              <span>
                · Стандартеый Siemens PLC, автоматический двухрежимный режим,
                управление можно переключать на местное или удаленное, что-бы
                обеспечить безопасную и стабильную работу;
              </span>
              <br />
              <span>· Автоматическая диагностика неисправностей;</span>
              <br />
              <span>· Историю поломок можно смотреть удаленно.</span>
            </p>
          </div>
          <div className="centrifugal__sub-title">
            03 анализ напряжение-деформациий импеллера
          </div>
          <Image
            src={centrefugal5}
            width={649}
            height={180}
            alt=""
            style={{ width: "auto" }}
          />
          <div className="centrifugal__text">
            Чем выше производительность, тем выше эффективность. Один
            центробежный компрессор заменит много винтовых компрессоров, чтобы
            сэкономить около 20% энергопотребления.
          </div>
          <Image
            src={centrefugal6}
            width={900}
            height={300}
            alt=""
            style={{ width: "auto" }}
          />
          <div className="centrifugal__text">
            Замените несколько винтовых машин центробежным компрессором,
            сэкономьте расходы на техническое обслуживание, сэклномьте время
            технического обслуживания, сэкономьте площадь участка и затрат на
            электричество.
          </div>
        </div>
        <Image src={centrefugal7} width={1135} height={309} alt="" />
      </TabsPanel>
      <section className="feedback wrap">
        <AskForm url="/ask" />
      </section>
    </main>
  );
}
