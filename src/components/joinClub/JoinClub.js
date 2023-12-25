import React from "react";
import "./JoinClub.css";
import logo from "../../media/img/hiking-logo.png";

const JoinClub = () => {
  return (
    <div className="join_club">
      <div className="text">
        <p>
          შენ შეგიძლია <strong>გახდე ჩვენი კლუბის წევრი</strong>, ამისათვის
          საჭიროა შეავსო განაცხადი
        </p>
      </div>
      <img src={logo} alt="Ajara Hiking Club" />
      <a
        className="fill_form"
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FMeiSivtzWoV8vXscA%3Ffbclid%3DIwAR1Q3_fm7TbSSu6B0ORHli2XN1lKB6orqOYyIl2zb4Q0pslU7AiuZTLeado&h=AT2At4_OSWLeBxRKHjdz9dS0MOQmH7t3iAaaV1eZes2vY3xHT8UHgHTXMlM4V1Lec3hgT-nuGuwoPDJRSQ2zGIb5m3N6frvt_D5XHKoIaC93MSEcj3gFaVvg5Qj-rTWM-GBHqQ"
        target="_blank"
      >
        განაცხადის შევსება
      </a>
    </div>
  );
};

export default JoinClub;
