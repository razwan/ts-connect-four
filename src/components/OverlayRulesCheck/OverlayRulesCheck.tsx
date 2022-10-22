import React from 'react';

import { Check } from "./OverlayRulesCheck.style";
import checkH from "./assets/icon-check-hover.svg";
import check from "./assets/icon-check.svg";

import { useState } from 'react';

type POverlayRulesCheck = {
  children?: React.ReactNode,
  clickHandler?: Function
}

const OverlayRulesCheck: React.FC<POverlayRulesCheck> = ( props ) => {
    const clickHandler = props.clickHandler ?? (() => {});
    const [hover, setHover] = useState(false);
    const src = hover === true ? checkH : check;
    return (
      <Check
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={ () => { clickHandler() } }
      >
        <img src={ src } alt="check" />
      </Check>
    );
}

export default OverlayRulesCheck;