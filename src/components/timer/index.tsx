import React, { useState, useEffect } from "react";
import Icon from "../icon";
import * as Styled from "./styles";

interface TimerProps {
  /* How long in seconds the timer lasts.
     Defaults to 60 seconds */
  seconds?: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [duration, setDuration] = useState(seconds ? seconds : 60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setDuration(duration - 1);
    }, 1000);
    if (duration === 0) clearInterval(countdown);
    return () => clearInterval(countdown);
  }, [duration]);

  const formatTime = () => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = duration - hours * 3600 - minutes * 60;

    let displayHours = hours > 0 ? hours.toString() : "00";
    let displayMinutes = minutes > 0 ? minutes.toString() : "00";
    let displaySeconds = seconds > 0 ? seconds.toString() : "00";

    if (hours < 10) {
      displayHours = "0" + hours;
    }
    if (minutes < 10) {
      displayMinutes = "0" + minutes;
    }
    if (seconds < 10) {
      displaySeconds = "0" + seconds;
    }
    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
  };

  return (
    <Styled.Timer>
      <Icon icon="stopwatch" dark />
      <Styled.Countdown>{formatTime()}</Styled.Countdown>
    </Styled.Timer>
  );
};

export default Timer;
