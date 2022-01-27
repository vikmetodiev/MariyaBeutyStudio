import "./styles/styles.scss";
import React from "react";
import Grid from "@mui/material/Grid";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
const VenusViva = () => {
  return (
    <div className="vacu-active position-relative">
      <a href="/">
        <img src="logo.svg" className="logo" />
      </a>
      <div className="container">
        <div className="text-center">
          <img src="logo_venus.png" width={"40%"} className="mt-5" />
        </div>
        <Grid container spacing={2} className="mt-5">
          <Grid
            item
            lg={3}
            sm={12}
            xs={12}
            md={12}
            className="align-items-center p-4"
            style={{ textAlign: "justify" }}
          >
            <div>
              <h3>
                Какво Представлява{" "}
                <span className="venus-color">VENUS VIVA ™</span>?
              </h3>
              <h5>Ресърфейсинг на кожата</h5>
              <strong>какво представляват</strong>
              <div className="venus-title">ПРОЦЕДУРИТЕ</div>
              <div className="venus-border-bottom">
                Процедурите обикновено варират между 3-4 сесии, на всеки 4-6
                седмици. Точният брой сесии зависи от нуждите на пациента.
              </div>
              <strong>бързо</strong>
              <div className="venus-title">ВЪЗСТАНОВЯВАНЕ</div>
              <div className="venus-border-bottom">
                Ще забележите леко зачервяване след всяка процедура. Можете да
                възобновите редовната грижа за кожата си и гримирането в рамките
                на 24 часа след процедурата.
              </div>
              <strong>безопасно за</strong>
              <div className="venus-title">ВСИЧКИ ТИПОВЕ КОЖА</div>
              <div className="venus-border-bottom">
                Процедурите се извършват с радиочестотна технология, която е
                доказано безопасна и ефективна за всички типове кожа.
                Консултирайте се с вашия терапевт или лекар относно процедурите
                с Venus Viva™.
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={3}
            sm={12}
            xs={12}
            md={12}
            className="align-items-center p-4"
          >
            <div>
              <h3>
                Какво може да напрви
                <span className="venus-color"> ЗА ТЕБ</span>?
              </h3>
              <div
                className="venus-title"
                style={{ borderBottom: "3px solid white" }}
              >
                Премахва белези от акне и розацея
              </div>
              <div
                className="venus-title"
                style={{ borderBottom: "3px solid white" }}
              >
                Премахва стрии и пигментация
              </div>
              <img src="model2.jpg" width={"100%"} />
              <div
                className="venus-title"
                style={{ borderBottom: "3px solid white" }}
              >
                Премахва разширени пори и дълбоки бръчки
              </div>

              <div
                className="venus-title"
                style={{ borderBottom: "3px solid white" }}
              >
                Премахва дисхромия (промяна на цвета)
              </div>
              <img src="model.png" width={"100%"} />
              <div className="venus-title">
                Премахва неравна текстура на кожата
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={3}
            className="align-items-center p-4"
          >
            <div>
              <img src="logo_venus.png" width={"100%"} />
              <div className="second-venus-title">
                Подобрява вида на увредената кожа
              </div>
              <img src="model3.jpg" width={"100%"} height={"100%"} />
              <div className="venus-title">
                Безопасно и ефективно за всички типове кожа
              </div>
              <div className="venus-border-bottom">
                Обикновено процедурите за ресърфейсинг не са безопасни за
                по-тъмните тонове на кожата. Venus Viva™ е безопасен за всички
                типове кожа, дори и за кожа с по-тъмен тен.
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={3}
            className="align-items-center"
          >
            <div>
              <h3>
                Защо Venus Viva е точното решение
                <span className="venus-color"> ЗА ТЕБ</span>?
              </h3>
              <div className="venus-title">Удовлетвореност на пациентите</div>
              <div className="venus-border-bottom">
                Клинично проучване показа, че повечето пациенти оценяват
                комфорта, времето за възстановяване и резултатите от процедурите
                с Venus Viva™ като „Отлични“ и биха препоръчали процедурите с
                апарата на своите приятели.
              </div>
              <img src="model4.jpg" width={"100%"} />
              <div className="venus-title">Кратък възстановителен период</div>
              <div className="venus-border-bottom">
                Можете да възобновите редовната грижа за вашата кожа 24 часа
                след процедурата.
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-5">
          <Grid
            item
            lg={4}
            className="align-items-center p-4"
            style={{ textAlign: "justify" }}
          >
            <div>
              <h3>
                Начин на <span className="venus-color">Действие</span>?
              </h3>
              <h5>Процедури за ресърфейсинг на кожата</h5>
              <img src="device.jpg" width="100%" />
              <div className="venus-border-bottom">
                Процедурите за ресърфейсинг на кожата с Venus Viva™
                представляват миниатюрни пинове в апликатора, които безопасно
                доставят топлина (чрез нанофракционна радиочестота) през
                повърхността на кожата. Това създава микродермални пробождания,
                които впоследствие тялото заздравява по естествен път. Този
                процес възстановява кожата и признаците на увреждане по
                повърхността й. Тъй като пробожданията са миниатюрни,
                процедурата на практика е много по-комфортна от традиционните
                CO2 лазери и предоставя отлични резултати.
              </div>
              <img src="device1.png" width="100%" />
            </div>
          </Grid>
          <Grid item lg={8} className="align-items-center p-4">
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <h2>
                  Дава отлични <span className="venus-color">Резултати</span>
                </h2>
              </Grid>
              <Grid item lg={6}>
                <img src="results.jpg" width={"100%"} />
                <div className="p-2">Преди и след 2 процедури</div>
                <img src="results1.jpg" width={"100%"} />
                <div className="p-2">Преди и след 4 процедури</div>
                <img src="results2.jpg" width={"100%"} />
                <div className="p-2">Преди и след 1 процедура</div>
              </Grid>
              <Grid item lg={6}>
                <img src="reults3.jpg" width={"100%"} />
                <div className="p-2">Преди и след 3 процедури</div>
                <img src="results4.jpg" width={"100%"} />
                <div className="p-2">Преди и след 3 процедури</div>
                <img src="results5.jpg" width={"100%"} />
                <div className="p-2">Преди и след 2 процедури</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <div className="text-center">
              <h2 className="my-4">
                Още за <span className="venus-color">Venus Viva</span>
              </h2>
              <video
                src={"venus_viva.mp4"}
                className="venus-video"
                controls="controls"
                autoPlay={false}
              />
            </div>
          </Grid>
        </Grid>

        <hr />
      </div>
      <Contacts />
      <Footer />
    </div>
  );
};

export default VenusViva;
