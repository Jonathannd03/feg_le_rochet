import React from "react";
import HeaderElement from "./Header/HeaderElement";
import Cards from "./Cards/Cards";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <HeaderElement />
      <div className="welcome">
        <div className="welcome-msg">
          <h4>WILLKOMMEN</h4>
          <h1>Wir sind froh, dass Sie hier sind</h1>
          <p>
            Wir sind eine{" "}
            <strong>
              Gemeinschaft von ungewöhnlichen Freunden, die gemeinsam Jesus
              nachfolgen
            </strong>
            . In einer gespaltenen Welt voller Spannungen fühlen wir uns dazu
            berufen, einen seltenen Ort zu schaffen, an dem Beziehungen
            entstehen, die nach den Maßstäben der Welt keinen Sinn ergeben.
            Unabhängig von deinem Alter oder deinem Lebensabschnitt sind wir in
            Jesus geeint. Wir hoffen und beten, dass wir dir helfen können,
            Christus <strong>kennenzulernen</strong>, gemeinsam im Glauben zu{" "}
            <strong>wachsen</strong> und der Welt zu dienen.
          </p>
        </div>
      </div>

      <div className="card-container">
        <Cards
          bild={images.groups}
          title="Gruppen"
          alt="groups-picture"
          content="Das Leben hat mehr zu bieten. Gruppen bringen dich dorthin."
        />
        <Cards
          bild={images.serve}
          title="Dienen"
          alt="sere-picture"
          content="Machen Sie den nächsten Schritt."
        />
        <Cards
          bild={images.united}
          title="Vereinigt"
          alt="sere-picture"
          content="Jeder ist willkommen, denn wir sind 
          eine Familie."
        />
        <Cards
          bild={images.event}
          title="Veranstaltung"
          content="Was geht hier vor?"
        />
      </div>
    </>
  );
};

export default Home;
