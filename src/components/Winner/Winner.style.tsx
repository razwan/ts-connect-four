import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
<<<<<<< HEAD
import { LargeHeading } from "../Heading/Heading.style";
=======
>>>>>>> cac4cd20eebf5b9289f9b826dad530fccb3bfac2

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

<<<<<<< HEAD
export const WinnerH1 = styled(LargeHeading)`
`;

=======
export const WinnerH1 = styled.h1`
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
>>>>>>> cac4cd20eebf5b9289f9b826dad530fccb3bfac2
