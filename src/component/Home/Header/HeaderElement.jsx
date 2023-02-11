import React from "react";
import "./HeaderElement.scss";
import CountdownTimer from "../../CountdownTimer/CountdownTimer";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const HeaderElement = () => {
  return (
    <>
      <header>
        <div className="overlay"></div>
        <div className="container">
          <Grid
            container
            direction="column"
            columnSpacing={{ xs: 0, sm: 2, md: 3 }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              spacing={0}
            >
              <motion.div
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: -10, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                <h1>
                  FEG Le rochet <br></br>wir grüßen Sie im Namen Jesu
                </h1>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                  }}
                  className="header-button"
                >
                  Ich bin neu
                </motion.button>
              </motion.div>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="flex-end"
              columnSpacing={{ xs: 0, sm: 1, md: 3 }}
            >
              <motion.div
                initial={{ y: -250, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.8 }}
              >
                <h4>
                  Verbleibende Zeit bis zu unserem nächsten Gottesdienst !
                </h4>

                <CountdownTimer countdownTimestampMs={1735686000000} />
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </header>
    </>
  );
};

export default HeaderElement;
