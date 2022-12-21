import React from "react";
import { Form } from "../../components";
import Map from "./../../components/Map/Map";

const Contact = () => {
  return (
    <div className="contact">
      <div className="top-content">
        <div className="left-content">
          <Form />
        </div>
        <div className="right-content">
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
      </div>
      <Map />
    </div>
  );
};

export default Contact;
