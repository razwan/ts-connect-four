import styled from "styled-components";
import { MediumHeading, SmallHeading } from "../Heading/Heading.style";

export const ScoreCardWrapper = styled.div`
  background-color: #ffffff;
  border: 3px solid black;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 40px;
  position: relative;
  margin: 2rem;
`;


export const ScoreCardH3 = styled( SmallHeading )`
  margin: 0px;
  padding: 0px;
  text-transform: uppercase;
`;

export const ScoreCardH2 = styled( MediumHeading )`
  margin: 5px 0px 0px 0px;
  padding: 0px;
`;

