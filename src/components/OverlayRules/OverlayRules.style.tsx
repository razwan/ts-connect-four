import styled from "styled-components";
import { theme } from "../../styles/Theme.style";
import { MediumHeading, SmallHeading } from "../Heading/Heading.style";

export const OverlayRulesCheckWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RulesWrapper = styled.div`
  --side-padding: 20px;

  position: relative;
  
  padding: 2rem var(--side-padding) 4rem;
  border: 3px solid ${theme.colors.black};

  box-shadow: 0px 10px 0px #000000;
  background-color: ${theme.colors.white};
  border-radius: 20px;

  @media only screen and (min-width: 400px) {
    --side-padding: 34px;
  }

  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
    counter-reset: list-number;

    li {
      display: flex;
      counter-increment: list-number;

      &:before {
        content: counter( list-number );
        font-weight: 700;
        margin-right: 20px;
      }
    }

    li + li {
      margin-top: 10px;
    }
  }
`;

export const RulesHeadingH2 = styled(MediumHeading)`
  display:flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const RulesHeadingH3 = styled(SmallHeading)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const RulesList = styled.ol`
  margin: 1rem 0 0 0;
  padding: 0;
  counter-reset: item;
  list-style-type: none;
  list-style-position: outside;
`;

export const ListNo = styled.p`
  font-weight: 700;
`;

export const RulesLine = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;