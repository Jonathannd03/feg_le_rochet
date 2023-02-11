import { useState, useEffect } from "react";
import "./CountdownTimer.scss";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";
import { motion } from "framer-motion";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <motion.div
      animate={{ color: "rgb(255,215,0)", borderColor: "rgb(255,215,0)" }}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,215,0)",
        boxShadow: "0px 0px 8px rgb(255,215,0)",
      }}
      className="countdown-timer"
    >
      <span>{remainingTime.days}</span>
      <span>Tg</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>Std</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>Min</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>Sek</span>
    </motion.div>
  );
};

export default CountdownTimer;
