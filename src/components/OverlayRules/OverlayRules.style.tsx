import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const RulesWrapper = styled.div`
  background-color: ${theme.colors.white};
  margin: 6rem 2rem;
  display: flex;
  flex-direction: column;
  postion: relative;
  border: 3px solid ${theme.colors.black};
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  padding: 2rem 1rem;
`;

export const RulesHeadingH2 = styled.h2`
  display:flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;
`;

export const RulesHeadingH3 = styled.h3`
  margin-top: 1rem;
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