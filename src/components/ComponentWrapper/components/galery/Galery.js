import react from "react";
import "./styles/styles.scss";

const Galery = ({ handleChange }) => {
  const scrollIntoView = (refName) => {
    const element = document.getElementById(refName);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element.offsetTop,
      });
    }, 100);
  };

  return (
    <div id="item-2">
      <div className="bg-contacts">
        <h1>Галерия</h1>
      </div>

      <ul className="grid">
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                scrollIntoView("item-1");
              }}
              src="vacum.jpg"
              alt=""
            />
            <figcaption>Вакум Актив "BeutyLine"</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                scrollIntoView("item-1");
              }}
              src="vacum1.jpg"
              alt=""
            />
            <figcaption>Вакум Актив "BeutyLine"</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 0);
                scrollIntoView("item-1");
              }}
              src="roll.jpg"
              alt=""
            />
            <figcaption>Ролшейпър</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 7);
                scrollIntoView("item-1");
              }}
              src="others.jpg"
              alt=""
            />
            <figcaption>Консултации</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 0);
                scrollIntoView("item-1");
              }}
              src="roll1.jpg"
              alt=""
            />
            <figcaption>Ролшейпър</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 7);
                scrollIntoView("item-1");
              }}
              src="others1.jpg"
              alt=""
            />
            <figcaption>Консултации</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              src="image5.jpeg"
              alt=""
              onClick={(e) => {
                scrollIntoView("item-1");
              }}
            />
            <figcaption>Вакум Актив "BeutyLine"</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              src="rollshape_1.jpg"
              alt=""
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
            />
            <figcaption>Ролшейпър</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              src="image9.jpeg"
              onClick={(e) => {
                scrollIntoView("item-1");
              }}
              alt=""
            />
            <figcaption>Вакум Актив "BeutyLine"</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 4);
                scrollIntoView("item-1");
              }}
              src="beuty.jpg"
              alt=""
            />
            <figcaption>Химичен пилинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 0);
                scrollIntoView("item-1");
              }}
              src="rollshape.jpg"
              alt=""
            />
            <figcaption>Ролшейпър</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 7);
                scrollIntoView("item-1");
              }}
              src="diet.jpg"
              alt=""
            />
            <figcaption>Диети и хранителни режими</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 0);
                scrollIntoView("item-1");
              }}
              src="rollshape2.jpg"
              alt=""
            />
            <figcaption>Ролшейпър</figcaption>
          </figure>
        </li>

        <li>
          <figure className="grid__figure">
            <img
              src="photo.jpg"
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              src="photo1.jpg"
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo2.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo3.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo4.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo5.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo6.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo7.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo10.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo11.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo12.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo13.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
              src="photo16.jpg"
              alt=""
            />
            <figcaption>Инжектор Пен</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
              src="photo17.jpg"
              alt=""
            />
            <figcaption>Инжектор Пен</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
              src="photo18.jpg"
              alt=""
            />
            <figcaption>Инжектор Пен</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
              src="photo19.jpg"
              alt=""
            />
            <figcaption>Инжектор Пен</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 6);
                scrollIntoView("item-1");
              }}
              src="photo20.jpg"
              alt=""
            />
            <figcaption>Инжектор Пен</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo21.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo22.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
        <li>
          <figure className="grid__figure">
            <img
              onClick={(e) => {
                handleChange(e, 3);
                scrollIntoView("item-1");
              }}
              src="photo23.jpg"
              alt=""
            />
            <figcaption>Микроблейдинг</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Galery;
