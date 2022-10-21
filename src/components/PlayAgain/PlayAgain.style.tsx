import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
import { XSmallHeading } from "../Heading/Heading.style";
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

export const PlayText = styled(XSmallHeading)`
  color: ${theme.colors.white};
`;
