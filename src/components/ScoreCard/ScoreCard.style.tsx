import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

interface PPosition {
  position: 'left' | 'right'
};

export const ScoreCardWrapper = styled.div<PPosition>`
  position: relative;

  --side-padding: 20px;
  margin-${ props => props.position }: 10px;
  padding: 10px var(--side-padding);
  
  border: 3px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${theme.colors.black};

  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 630px) {
    --side-padding: 12%;
    flex-direction: ${ props => props.position === 'left' ? 'row' : 'row-reverse' };
    margin-${ props => props.position }: 15px;
    gap: 20px;
  }
  
  @media only screen and (min-width: 1140px) {
    flex-direction: column;
    gap: 5px;

    width: 140px;
    margin-${ props => props.position }: 0;
    padding-top: 46px;
    padding-bottom: 20px;
    --side-padding: 20px;
  }
`;

export const ScoreCardScore = styled.h3`
  text-transform: uppercase;

  @media only screen and (min-width: 630px) {
    padding: 20px;
  }

  @media only screen and (min-width: 1140px) {
    padding: 0;
  }
`;

export const PositionedScoreCardEmoji = styled.div<PPosition>`
  position: absolute;
  ${(props) => props.position}: 0;
  top: 50%;
  translate: ${(props) => props.position === 'left' ? '-50%' : '50%'} -50%;

  @media only screen and (min-width: 1140px) {
    top: 0;
    left: 50%;
    right: auto;
    translate: -50% -50%;
  }
`;

