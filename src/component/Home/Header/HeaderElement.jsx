import React from "react";
import "./HeaderElement.scss";
import CountdownTimer from "../../CountdownTimer/CountdownTimer";
import { motion } from "framer-motion";

const HeaderElement = () => {
  return (
    <>
      <header>
        <div className="overlay"></div>
        <div className="container">
          <div className="title-box">
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: -90, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="title"
            >
              <h1>FEG Le rochet</h1>
              <p>wir grüßen Sie im Namen Jesu</p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px #285430",
                  boxShadow: "0px 0px 8px #285430",
                }}
                className="header-button"
              >
                Ich bin neu!
              </motion.button>
            </motion.div>
          </div>

          <div className="timer-box">
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 150, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.8 }}
            >
              <h4>Verbleibende Zeit bis zu unserem nächsten Gottesdienst !</h4>

              <CountdownTimer countdownTimestampMs={1735686000000} />
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderElement;
