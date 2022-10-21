import styled from 'styled-components';
import { theme } from "../../styles/Theme.style";

export interface IBoardWrapper {}

export interface IBoardPlayerPointerWrapper {}

export const BoardPlayerPointerContainer = styled.div<IBoardPlayerPointerWrapper>`
  display: grid;
  gap: 10px;
  padding: 0 10px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 335px;
  grid-template-columns: repeat(7,minmax(auto,64px));

  @media (min-width: 768px) {
    gap: 24px;
    padding: 0 20px;
    width: 632px;
  }
`;

export const BoardPlayerPointerImg = styled.img<IBoardPlayerPointerWrapper>`
  position: absolute;
  transform: translate(-50%, 50%) scale(0.5);
  left: 50%;
  z-index: 4;
  top: -35px;
  
  @media (min-width: 768px) {
    top: -57px;
    transform: translate(-50%,50%) scale(1);
  }
`;

export const BoardWrapper = styled.div<IBoardWrapper>`
  position: relative;
  height: 335px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    height: 584px;
  }
`;

export const BlackLayer = styled.div<IBoardWrapper>`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, minmax(auto,64px));
  grid-template-rows: repeat(6, minmax(auto,64px));
  background: ${theme.colors.black};
  border: 3px solid ${theme.colors.black};
  box-shadow: 0 10px 0 ${theme.colors.black};
  border-radius: 30px;
  mix-blend-mode: hard-light;
  position: absolute;
  z-index: -1;
  width: 335px;
  height: 310px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px 32px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: auto;
    height: 584px;
    gap: 24px;
    padding: 20px 20px 60px;
  }
  
`;

export const BoardHoleWrapper = styled.div<IBoardWrapper>`
  background: ${theme.colors.black};
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export const BoardHole = styled.div<IBoardWrapper>`
  background: ${theme.colors.lightPurple};
  border-radius: 50%;
  width: 100%;

  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 15%;
`;

export const WhiteBoardHole = styled.div<IBoardWrapper>`
  background: grey;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: absolute;
`;

export const WhiteLayer =styled.div<IBoardWrapper>`
  display: grid;
  gap: 10px;
  background: ${theme.colors.white};
  border: 3px solid ${theme.colors.black};
  border-radius: 30px;
  padding: 10px 10px 32px;
  mix-blend-mode: hard-light;
  z-index: 3;
  position: absolute;
  width: 335px;
  height: 310px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-columns: repeat(7, minmax(auto,64px));
  grid-template-rows: repeat(6, minmax(auto,64px));
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: auto;
    height: 584px;
    gap: 24px;
    padding: 20px 20px 60px;
  }
`;