import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const ScoreCardWrapper = styled.div`
  position: relative;

  padding: 5px 40px;
  border: 3px solid ${ theme.colors.black };
  background-color: ${ theme.colors.white };
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${ theme.colors.black };

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScoreCardH3 = styled.h3`
  margin: 0px;
  padding: 0px;
`;
export const ScoreCardH2 = styled.h2`
  margin: 5px 0px 0px 0px;
  padding: 0px;
`;

