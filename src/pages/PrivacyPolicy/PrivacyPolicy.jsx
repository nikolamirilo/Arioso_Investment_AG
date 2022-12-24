import React from "react";
import data from "../../translationKeys.json";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-policy">
      <div className="top-content">
        <div className="group">
          <h3> Novak-Immobilien-investment s.r.o.</h3>
          <p> Vienna Gate – Kopčianska 10</p>
          <p> Bratislava – mestská časť Petržalka 851 01 </p>
        </div>
        <div className="group">
          <h3>ID: 51 334 054</h3>
          <h3>VAT: SK2120676910</h3>
          <h3>IBAN:SK87 1122 0000 0018 0750 8008</h3>
          <h3>SWIFT: UNCRSKBX</h3>
        </div>
        <div className="group">
          <a href="mailto:">email:info@novak-immobilien-investment.com</a>
          <p>Telefon:</p>
          <p>Fax: 00421-24341 2630</p>
        </div>
        <div className="group">
          <h3> Unser Team besteht aus</h3>
          <ol>
            <li>Executive Director</li>
            <li>Office Lady</li>
            <li>Manager</li>
            <li>Partner</li>
          </ol>
        </div>
        <div className="group">
          <h3> Um Terminvereinbarung wird gebeten</h3>
          <p>Montag – Freitag: 8:00 – 17:00 Uhr</p>
          <p>Samstag: 8:00 – 15:00 Uhr</p>
          <p>Sonntag: Geschlossen</p>
        </div>
      </div>
      <div className="bottom-content">
        {data.privacy_policy.paragraphs
          ? data.privacy_policy.paragraphs.map((item, idx) => {
              return (
                <div className="term" key={idx}>
                  <h3>{t(`${item.title}`)}</h3>
                  <p>{t(`${item.text}`)}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
