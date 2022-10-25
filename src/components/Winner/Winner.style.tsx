import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
import { LargeHeading } from "../Heading/Heading.style";

export const WinnerWrapper = styled.div`
  text-align: center;
  padding: 5px 40px;
  border: 3px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${theme.colors.black};
`;

export const WinnerH1 = styled(LargeHeading)`
  text-transform: uppercase;
`;

export const WinnerH3 = styled.h3`
 text-transform:uppercase;
`;

export const PlayAgainButton = styled.button`
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  background-color: ${theme.colors.darkPurple};
  padding: 8px 17px;

  &:hover {
    background-color: ${theme.colors.pink};
  }
`;

export const PlayText = styled.h3`
color: ${theme.colors.white};
`;
