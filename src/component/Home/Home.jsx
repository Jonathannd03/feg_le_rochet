import React from "react";
import HeaderElement from "./Header/HeaderElement";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* Header component */}
      <HeaderElement />

      {/* Welcome message*/}
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
        <div className="wlcm-img">
          <img src={images.wlcmImg} alt="wlcm-img" />
        </div>
      </div>

      {/* prayer request */}
      <div className="prayer">
        <div className="prayer-msg">
          <h4>GEBETANLIEGEN</h4>
          <h1>Wie können wir mit Ihnen beten?</h1>
          <p>
            Wir glauben, dass Gebet einen Unterschied macht. Jede Woche betet
            unser Team über jedes Anliegen, das wir erhalten. Es ist uns eine
            Ehre, gemeinsam mit Ihnen zu beten. Bitte geben Sie an, ob Sie
            möchten, dass Ihr Gebet in unserer Gebetskette weitergegeben wird,
            oder ob es vertraulich mit den Pastoren bleiben soll.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            className="button"
          >
            Beten Sie für mich
          </motion.button>
        </div>
      </div>

      {/* Card components*/}
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

      {/* carousel component */}
      <Carousel />
    </>
  );
};

export default Home;
