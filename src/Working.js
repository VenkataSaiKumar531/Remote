import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useState } from "react";

const Working = () => {
  const [inc, setInce] = useState(18);
  const [speed, setSpeed] = useState(1);

  const Increment = () => {
    if (inc >= 18 && inc < 30) {
      setInce(inc + 1);
    }
  };

  const Decrement = () => {
    if (inc > 18 && inc <= 30) {
      setInce(inc - 1);
    }
  };

  const Fan = () => {
    if (speed === 1) {
      setSpeed(2);
    } else if (speed === 2) {
      setSpeed(3);
    } else if (speed === 3) {
      setSpeed(1);
    }
  };
  return (
    <div>
      <hr />
      <h1>⚙️{inc}</h1> <h1>📶{speed}</h1>
      <hr />
      <Button variant="contained" color="primary" onClick={Increment}>
        ⬆
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="primary" onClick={Decrement}>
        ⬇
      </Button>
      <hr />
      <Button variant="contained" color="secondary" onClick={Fan}>
        FanSpeed*️⃣
      </Button>
    </div>
  );
};

export default Working;
