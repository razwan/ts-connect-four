import styled from "styled-components";

interface ScoreCardWrapper {}

export const LeftScoreCard = styled.div<ScoreCardWrapper>`
  background-color: #ffffff;
  width: 142px;
  height: 81px;
  border: 3px solid black;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftScoreCardWrapper = styled.div`
  width: 72px;
  height: 61px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

export const RightScoreCard = styled.div<ScoreCardWrapper>`
  background-color: #ffffff;
  width: 142px;
  height: 81px;
  border: 3px solid black;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightScoreCardWrapper = styled.div`
  width: 80px;
  height: 61px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
`;

export const ScoreCardH3 = styled.h3`
  margin: 0px;
`;
export const ScoreCardH2 = styled.h2`
  margin: 5px 0px 0px 0px;
`;

