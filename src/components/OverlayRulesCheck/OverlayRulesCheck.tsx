import React from 'react';

import { Check } from "./OverlayRulesCheck.style";
import checkH from "./assets/icon-check-hover.svg";
import check from "./assets/icon-check.svg";

import { useState } from 'react';

const OverlayRulesCheck = () => {
    const [hover, setHover] = useState(false);
    return (
      <Check
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover === true ? (
          <img src={checkH} alt="checkhover" />
        ) : (
          <img src={check} alt="check" />
        )}
      </Check>
    );
}

export default OverlayRulesCheck;