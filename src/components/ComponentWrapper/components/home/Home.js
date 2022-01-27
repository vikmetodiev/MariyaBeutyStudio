import "./styles/styles.scss";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
const Home = () => {
  return (
    <div id="item" className="text-center home">
      <div className="container p-5 " style={{ textAlign: "justify" }}>
        <br />
        <br />
        <h1 className="mb-3 text-center">Красотата е здраве!</h1>
        <i className="paper-bg mt-2 p-3 h5">
          Център за красота и здраве <strong>МАРИЯ БЮТИЛАЙН</strong> предлага
          уют, спокойствие и професионална грижа. Посрещаме ви с усмивка и
          гарантираме качество!
        </i>
        <br />
        <div className="text-center">
          <img
            src="mariya_mitko.jpg"
            className="img-mitko m-5 p-5 text-center"
          />
        </div>
        <br />
        <i className="p-3 paper-bg" style={{ fontSize: 20 }}>
          Разнообразието от услуги и стоки за здраве и красота, ни дава
          възможност за индивидуален подход към всеки наш клиент. Доверете се на{" "}
          <strong> опита и качеството!</strong>
        </i>
        <h1 className="mt-2 text-center">Мечтаната визия става реалност!</h1>
      </div>
      <img src="Logo.jpg" className="img-home" />
      <div className="container p-5" style={{ textAlign: "justify" }}>
        <h1 className="mb-3 text-center">Мария Бечева</h1>
        <i className="paper-bg mt-2 p-3 h5">
          <span>Девиз:</span>
          <br />
          <strong>„Красотата е здраве!“</strong>
          <br />
          Завършила Университет по Хранителни Технологии-Пловдив с отличен успех
          специалност Храни хранене и диететика.
        </i>
        <br />
        <br />
        <Grid container spacing={2} className="mt-5">
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            md={12}
            className="align-items-center p-4"
            style={{ textAlign: "justify" }}
          >
            <i className="paper-bg">
              Консултации за здравословно и балансирано хранене
            </i>
            <section className="dl-blurbs">
              <dl className="ps-5">
                <dt>Редуциране на тегло</dt>
                <dt>Покачване на мускулна маса</dt>
                <dt>Хранене при диабет тип 2 и инсулинова резистентност</dt>
                <dt>Хранене при Тиреоидит на Хашимото</dt>
                <dt>
                  Хранене при хронични заболявания на бъбреците и пикочните
                  пътища
                </dt>
                <dt>Хранене при бъбречнокаменна болест</dt>
                <dt>
                  Хранене при гастрит и язви на стомаха и дванадесетопръстника
                </dt>
                <dt>
                  Хранене при нарушени чернодробни функции и жлъчнокаменна
                  болест
                </dt>
                <dt>
                  Хранене при сърдечно-съдови заболявания и повишено артериално
                  налягане
                </dt>
                <dt>Хранене по време на бременност</dt>
                <dt>Детоксикация и пречистване на организма</dt>
                <dt>Хранене при различните възрастови групи</dt>
                <dt>Хранене на хора над 60 години</dt>
                <dt>Предпазно – професионално хранене</dt>
                <dt>Изготвяне на индивидуален хранителен режим</dt>
              </dl>
            </section>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} md={12} className="text-center p-4">
            <img src="Maria.jpg" width={"85%"} />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} md={12} className="text-center p-4">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  1997г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Мария Бечева</strong> започва да се занимава
                  професионално с козметика още от 1997г.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2000г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  През 2000г започва да работи по система на френската марка
                  COLLIN, присъствие на семинари и обучения проведени в Париж.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2006г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Получава сертификат за пиърсинг и грижите след това.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2007г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Получава професионално удостоверение за козметичен грим
                  издадено от „ Национална гимназия по сценични и екранни
                  изкуства“, като практическата част е проведена в Драматичен
                  театър Пловдив.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2007г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Получава професионално удостоверение за козметичен грим
                  издадено от „ Национална гимназия по сценични и екранни
                  изкуства“, като практическата част е проведена в Драматичен
                  театър Пловдив.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2007г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Участва в обучение за „Работа в публичното пространство и
                  тренинг по основи на PR и рекламни умения“.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2008г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Възпитаничка на немската школа „Golden eye“.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2009г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Бива наградена с Level Master първо място „Перманентен грим“,
                  преподавател Холгер Хофман – световен шампион по перманентен
                  грим за 1996 и 1999г.
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <div style={{ textAlign: "left" }} className="px-4 mb-2">
              <i className="paper-bg" style={{ fontSize: 20 }}>
                Притежава множество сертификати и завършени Master класове за
                повишаване на професионалното ниво и допълнителни квалификации!
                Някои от тях са:
              </i>
            </div>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2013г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за участие в обучение на тема целулит.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2013г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Международен сертификат за практичен тренинг на „Collin
                  Paris“.
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} md={12} className="text-center p-4">
            <Timeline position="alternate" className="m-0">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2014г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за BDR &amp; Phyt`s терапии.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2017г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за теоретичен и практичен курс за работа с
                  hidrafacial апарат.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2017г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за професионален тренинг за мезотерапия на лице и
                  тяло с лектор Жанета Сидерова.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2017г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Master клас за розацея, купероза, разширени вени и капиляри.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2018г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Master class за скрити кожни инфекции.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2018г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Master class за мини инвазивни процедури.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2018г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за завършен професионален курс на JMF Accademy.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2018г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за преминат курс „ Приложение на шуслеровите соли в
                  козметиката“ с лектор графиня Ангелика Волфский фон
                  Райхенберг.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2019г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат от GIGI Laboratories.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2019г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат от семинар по холистична медицина.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2019г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат PMU Colorimetrie &amp; Pigmentology.
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  2019г
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  Сертификат за работа с Инжектор пен.
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <div style={{ textAlign: "left" }} className="px-4">
              <i>
                Притежава дългогодишен опит като лектор по козметика в УЦ
                „Феникс“ и ЦПО „Пепе“, както и към ПГО „Ана Май“.
              </i>
              <i className="d-block mt-3">
                Ученици и студенти от ПГО „Ана Май“ и МУ Пловдив провеждат
                практическите си занимания под ръководството на Мария Бечева.
              </i>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
