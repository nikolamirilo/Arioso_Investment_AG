import React from "react";
import { Form, Modal } from "../../components";
import Map from "./../../components/Map/Map";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <div className="top-content">
        <div className="left-content">
          <Form />
        </div>
        <div className="right-content">
          <div className="group">
            <h3>Arioso Investment AG</h3>
            <p>Grafenauenweg 10</p>
            <p>{t("Switzerland")} - 6300 Zug </p>
          </div>
          <div className="group">
            <p>AKTIENGESELLSCHAFT (AG)</p>
            <p>{t("Company Registration Number")}: CH-170.3.038.269-9</p>
            <p>UID/MWST-: CHE-432.401.026</p>
          </div>
          <div className="group">
            <p>{t("Telefon")}: 321219 2109</p>
            <p>{t("Fax")}: 10021 2918</p>
            <p>
              {t("Email")}: <a href="mailto:"> info@arioso-ag.ch </a>
            </p>
          </div>
          <div className="group">
            <h3>{t("Working time")}</h3>
            <p>
              {t("Monday")} – {t("Friday")}: 8:00 – 17:00 {t("hour")}
            </p>
            <p>
              {t("Saturday")}: 8:00 – 15:00 {t("hour")}
            </p>
            <p>
              {t("Sunday")}: {t("Closed")}
            </p>
          </div>
        </div>
      </div>
      <Map />
      <Modal />
    </div>
  );
};

export default Contact;
