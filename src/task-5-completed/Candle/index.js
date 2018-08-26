import React from "react";
import "./index.css";

const Candle = ({ fired = false, up = false  }) => {
  const candleClassName = up ? "candle candleFallen" : "candle";
  return (
    <div className={candleClassName}>
      <Flame fired={fired}/>
    </div>
  );
};

const Flame = ({ fired = false }) => {
  const flameClassName = fired ? "flameWrapper" : "flameWrapper flameWrapperOff";
  return (
    <div className={flameClassName}>
      <div className="flame" />
    </div>
  );
};

export default Candle;
