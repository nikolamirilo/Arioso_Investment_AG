import React from "react";
import data from "../../translationKeys.json";
import { useTranslation } from "react-i18next";

const DetailsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="details-section">
      <p>{t("We are")}</p>
      {data.about.details
        ? data.about.details.map((item, idx) => {
            return (
              <details key={idx}>
                <summary>{t(`${item.summary}`)}</summary>
                <div className="details-paragraphs">
                  {item.paragraphs
                    ? item.paragraphs.map((paragraph, idx) => {
                        return <div key={idx}>{t(`${paragraph}`)}</div>;
                      })
                    : null}
                </div>

                {item.lists
                  ? item.lists.map((list, idx) => {
                      return (
                        <div key={idx} className="details-list">
                          {list.title ? <h4>{t(`${list.title}`)}</h4> : null}
                          <ul>
                            {list.list_elements
                              ? list.list_elements.map((list_el, idx) => {
                                  return <li key={idx}>{t(`${list_el}`)}</li>;
                                })
                              : null}
                          </ul>
                        </div>
                      );
                    })
                  : null}
                {item.note ? <h4 className="details-note">{t(`${item.note}`)}</h4> : null}
              </details>
            );
          })
        : null}
    </div>
  );
};

export default DetailsSection;
