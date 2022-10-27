import styled from "styled-components";
import { LargeHeading, SmallHeading } from "../Heading/Heading.style";

export const TimerWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const TimerH1 = styled(LargeHeading)`
  text-transform: uppercase;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TimerH3 = styled(SmallHeading)`
  text-transform: uppercase;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
