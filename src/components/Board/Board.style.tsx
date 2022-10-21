import styled from 'styled-components';
import { theme } from "../../styles/Theme.style";

const LayerGeneralStyles = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 10px 10px 32px;
  border: 3px solid ${theme.colors.black};
  border-radius: 30px;

  @media (min-width: 768px) {
    gap: 24px;
    padding: 20px 20px 60px;
  }
`;

export const WhiteLayer =styled(LayerGeneralStyles)`
  mix-blend-mode: hard-light;
  background: ${theme.colors.white};
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const BlackLayer = styled(LayerGeneralStyles)`
  background: ${theme.colors.black};
  box-shadow: 0 10px 0 ${theme.colors.black};
  z-index: -1;
`;

export const BoardPlayerPointerContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  grid-template-columns: repeat(7, 1fr);

  @media (min-width: 768px) {
    gap: 24px;
    padding: 0 20px;
  }
`;

export const BoardPlayerPointerImg = styled.img`
  position: absolute;
  transform: translate(-50%, 50%) scale(0.5);
  left: 50%;
  top: -38px;
  z-index: 4;
  
  @media (min-width: 768px) {
    top: -48px;
    transform: translate(-50%,50%) scale(1);
  }
`;

export const BoardHoleWrapper = styled.div`
  background: ${theme.colors.black};
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
`;

export const BoardHole = styled.div`
  background: ${theme.colors.lightPurple};
  border-radius: 50%;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 15%;
`;

export const WhiteBoardHole = styled.div`
  background: grey;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;