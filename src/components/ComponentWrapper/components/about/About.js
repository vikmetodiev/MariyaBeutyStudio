import "./styles/styles.scss";
const About = () => {
  return (
    <div id="item-0" className="text-center">
      <div className="bg-contacts">
        <h1 className="mt-3">За нас</h1>
      </div>
      <div className="about">
        <div className="glassy-text paper-bg">
          <h2>
            <strong> PERSONAL BEAUTY COACH</strong>
          </h2>
          <div style={{ textAlign: "justify" }} className="px-3">
            <div>
              Готови ли сте да откриете истинското си излъчване и да повдигнете
              самочувствието си, както никога до сега?
            </div>
            <div>
              Beauty тренинга е индивидуален подход, който съчетава в себе си
              много и различни методи и техники, с които ще Ви помогна да
              заблестите с истинската си красота.
            </div>
            <div>
              Повече от 25 години работя в сферата на красотата с клиенти от
              всички възрасти. Смятам, че връзката на вътрешното здравословно
              състояние и външния вид на човека е неоспорима. За това моята цел,
              като дипломиран специалист инструктор по хранене и експерт в
              козметичния бранш, е да Ви вдъхновя!
            </div>{" "}
            <div>
              {" "}
              Да Ви дам възможност да изразите своята индивидуалност и уникална
              красота!
            </div>
          </div>
          <strong> Предлагам Ви:</strong>
          <ul className="px-3">
            {" "}
            <li>• Консултация и анализ на телесното състояние.</li>
            <li>• Замерване с телесен анализатор ТАНИТА.</li>
            <li>
              • Изготвяне на индивидуална хранителна програма и здравословен
              начин на живот.{" "}
            </li>{" "}
            <li>• Изготвяне на индивидуална тренировъчна програма. </li>
            <li>
              • Комбинация от упражнения с тренировъчни уреди бягаща пътека и
              моделиращ масаж с ролери съчетани с най- новите технологии като,
              вакум, инфрачервена светлина, колаген и ароматерапии, с които се
              постигат гарантирани безопасни и бързи резултати.
            </li>
            <li>
              • Изготвяне на индивидуална програма с козметични и естетични
              процедури за лице и тяло, масажи, консултации с професионален
              гримьор и за перманентен грим.
            </li>
            <li>
              • Разполагам с модерно оборудван козметичен кабинет с иновативна
              апаратура Venus Viva за третиране на белези, стрии, дълбоки
              бръчки, акне, подмлдяване и лифтинг.
            </li>
          </ul>
          <strong style={{ fontStyle: "italic" }}>
            МЕЧТАНАТА ФИГУРА СТАВА РЕАЛНОСТ!!!
          </strong>
        </div>
      </div>
    </div>
  );
};

export default About;