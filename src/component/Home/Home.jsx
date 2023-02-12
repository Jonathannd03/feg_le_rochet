import React from "react";
import HeaderElement from "./Header/HeaderElement";
import Carousel from "./Carousel/Carousel";
import { images } from "../../constants";
import { motion } from "framer-motion";
import PhotoCard from "../../shared/Photo card/PhotoCard";
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
          <motion.h1 animate={{ color: "#285430" }}>
            Wir sind froh, dass Sie hier sind
          </motion.h1>
          <p>
            Wir sind eine{" "}
            <motion.strong animate={{ color: "#285430" }}>
              Gemeinschaft von ungewöhnlichen Freunden, die gemeinsam Jesus
              nachfolgen
            </motion.strong>
            . In einer gespaltenen Welt voller Spannungen fühlen wir uns dazu
            berufen, einen seltenen Ort zu schaffen, an dem Beziehungen
            entstehen, die nach den Maßstäben der Welt keinen Sinn ergeben.
            Unabhängig von deinem Alter oder deinem Lebensabschnitt sind wir in
            Jesus geeint. Wir hoffen und beten, dass wir dir helfen können,
            Christus{" "}
            <motion.strong animate={{ color: "#285430" }}>
              kennenzulernen
            </motion.strong>
            , gemeinsam im Glauben zu{" "}
            <motion.strong animate={{ color: "#285430" }}>
              wachsen
            </motion.strong>{" "}
            und der Welt zu dienen.
          </p>
        </div>
        <div className="wlcm-img">
          <img src={images.wlcmImg} alt="wlcm-img" />
        </div>
      </div>

      {/* Card components*/}
      <div className="card-container">
        <PhotoCard
          bild={images.groups}
          title="NÄCHSTE SCHRITTE"
          content="Erfahren Sie, wie Sie in Ihrem Glauben wachsen und sich an einem unserer 2 Standorte engagieren können "
        />
        <PhotoCard
          bild={images.gl3}
          title="ANBETUNG/WORSHIP"
          content="Entdecken Sie, wie Sie sich für Musik und Kunst an le rochet engagieren können. Erfahren Sie mehr über unseren Alpha-Omega-Chor. "
        />
        <PhotoCard
          bild={images.serve}
          title="BETEN"
          content="Es ist unser Privileg, für die Nöte der Menschen in unserer Gemeinde und in der ganzen Welt zu beten. Reichen Sie einen Antrag ein, wenn Sie sich unserem Gebetsdienst anschließen möchten."
        />
        <PhotoCard
          bild={images.gl2}
          title="BESUCHEN SIE UNS"
          content="Wenn man zum ersten Mal an einem neuen Ort auftaucht, kann das einschüchternd wirken. Vielleicht haben Sie Fragen dazu, was Sie erwartet, wohin Sie gehen sollen und vieles mehr. Wir würden uns gerne persönlich mit Ihnen in Verbindung setzen, um sicherzustellen, dass Sie sich bei le rochet wohl und willkommen fühlen."
        />

        <PhotoCard
          bild={images.event}
          title="DIENSTE"
          content="Erfahren Sie mehr über unsere Dienste für Kinder, Jugendliche und Erwachsene. Unabhängig von Ihrem Alter oder Familienstand, wir haben eine Gemeinde für Sie!"
        />
        <PhotoCard
          bild={images.united}
          title="GEBEN"
          content="Wenn Sie spenden, öffnen Sie die Tür, um mehr Menschen durch die Programme und Dienste zu erreichen, die sich dafür einsetzen, dass Jesus Leben verändert. "
        />
      </div>

      {/* prayer request */}
      <div className="prayer">
        <div className="prayer-msg">
          <h4>GEBETANLIEGEN</h4>
          <motion.h1 animate={{ color: "#285430" }}>
            Wie können wir mit Ihnen beten?
          </motion.h1>
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
              textShadow: "0px 0px 8px #285430",
              boxShadow: "0px 0px 8px #285430",
            }}
            className="button"
          >
            Beten Sie für mich
          </motion.button>
        </div>
      </div>

      {/* Card components*/}

      {/* carousel component */}
      <Carousel />
    </>
  );
};

export default Home;
