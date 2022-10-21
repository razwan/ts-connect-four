import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
import { LargeHeading } from "../Heading/Heading.style";

export const WinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 40px;
  border: 3px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${theme.colors.black};
`;

export const WinnerH1 = styled(LargeHeading)`
`;

