import React, { useState } from "react";
import { Form, FormGroup, Input, Row, Col } from "reactstrap";
import "./styles/styles.scss";
import axios from "axios";
import validator from "validator";
import Swal from "sweetalert2";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [moreInfo, setMoreInfo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0 && name.length > 0) {
      var bodyFormData = new FormData();
      bodyFormData.append("email", "viktor.metodiev@novarto.com");
      bodyFormData.append(
        "body",
        `${
          "Здравейте <br>" +
          "Имате съобщение от: " +
          name +
          "<br> Тел. Номер: " +
          phone +
          "<br> Детайли: " +
          moreInfo
        }`
      );
      axios
        .post(
          "https://mariabeautyline.solidtreble.com/ws/webform.php",
          bodyFormData,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        )
        .then(() => {
          Swal.fire("Успешно пращане на мейл-а", "success");
        })
        .catch((e) => {
          Swal.fire("Грешка при пращането на мейл-а", "error");
        });
    }
  };

  return (
    <div id="item-3" className="text-center container">
      <div className="bg-contacts">
        <h1>Контакти</h1>
      </div>

      <strong className="font-weight-bold">
        Свържете се с нас чрез Контактната Форма
      </strong>

      <Form className="m-auto mt-2" onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Row>
            <Col>
              <strong className="font-weight-bold">Име и Фамилия</strong>
              <Input
                name="email"
                id="exampleEmail"
                placeholder="Име и Фамилия"
                className="m-auto my-2 gold-border"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <strong className=" font-weight-bold">Тел. за Връзка</strong>
              <Input
                type="phone"
                name="phone"
                id="examplePassword"
                className="m-auto my-2 gold-border"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {!validator.isMobilePhone(phone) && phone.length > 0 && (
                <strong style={{ color: "red" }}>
                  Въведете правилен телефонен номер
                </strong>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong className="my-4 font-weight-bold">
                Повече информация
              </strong>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                className="m-auto mt-3 gold-border"
                value={moreInfo}
                onChange={(e) => setMoreInfo(e.target.value)}
              />
            </Col>
          </Row>
        </FormGroup>
        <button className="golden-btn">Изпрати</button>
      </Form>
      <hr className="w-50 m-auto mt-4" />
      <a href={`tel:0893023456`}>
        <button className="golden-btn" style={{ marginBottom: 220 }}>
          Или позвънете директно
        </button>
      </a>
    </div>
  );
};

export default Contacts;
