import styled from "styled-components";
import { MediumHeading } from "../Heading/Heading.style";
import { theme } from "../../styles/Theme.style";

export const ScoreCardWrapper = styled.div`
  position: relative;

  padding: 5px 40px;
  border: 3px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    width: 20%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1040px) {
    width: 10%;
    padding-top: 4%;
  } ;
`;

export const ScoreCardH3 = styled.h3`
  margin: 0px;
  padding: 0px;
  text-transform: uppercase;
`;

export const ScoreCardH2 = styled( MediumHeading )`
  margin: 5px 0px 0px 0px;
  padding: 0px;
`;

