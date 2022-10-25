import styled from "styled-components";

export const ScoreCardEmojiImageLeft = styled.img`
  position: absolute;
  top: 50%;
  left: -3.5rem;
  translate: 50% -50%;
  @media (min-width: 1040px) {
    top:0;
    left:3.6rem;
  } ;
`;

export const ScoreCardEmojiImageRight = styled.img`
  position: absolute;
  top: 50%;
  right: 0rem;
  translate: 50% -50%;
  @media (min-width: 1040px) {
    top: 0;
    left: 3.6rem;
  } ;
`;