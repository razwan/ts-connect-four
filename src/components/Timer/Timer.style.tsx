import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
import { LargeHeading, SmallHeading } from "../Heading/Heading.style";

export const TimerWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const TimerRectangle = styled.img`
`;

export const TimerH1 = styled(LargeHeading)`
  text-transform: uppercase;
  color: ${theme.colors.white};
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TimerH3 = styled(SmallHeading)`
  text-transform: uppercase;
  color: ${theme.colors.white};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
