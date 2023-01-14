import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import data from "../../translationKeys.json";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-policy">
      <Helmet>
        <meta
          name="description"
          content="The contents of our pages were created with great care. However, we can not assume any liability for the accuracy, completeness and timeliness of the content. As a service provider we are responsible according to § 7 Abs.1 TMG for own contents on these sides according to the general laws. According to § 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate an illegal activity. Obligations to remove or block the use of information under general law remain unaffected. A liability in this regard, however, is only possible from the date of knowledge of a specific infringement. If we become aware of such violations, we will remove this content immediately."
        />
        <title>{t("Privacy Policy")}</title>
      </Helmet>
      <div className="top-content">
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
          <p>{t("Telefon")}: 0041416770049</p>
          <p>
            {t("Email")}: <a href="mailto:office@arioso-investment.ch"> office@arioso-investment.ch </a>
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
