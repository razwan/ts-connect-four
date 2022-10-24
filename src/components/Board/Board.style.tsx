import styled from 'styled-components';
import { theme } from "../../styles/Theme.style";

const GridStyles = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 480px) {
    gap: 24px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const GridWithRowsStyles = styled( GridStyles )`
  grid-template-rows: repeat(6, 1fr);
`

export const LayerGeneralStyles = styled( GridWithRowsStyles )`
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 32px;
  border: 3px solid ${theme.colors.black};
  border-radius: 30px;

  @media (min-width: 480px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`;

export const LayerEmptyStyles = styled( LayerGeneralStyles )`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-color: transparent;
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

export const BoardPlayerPointerContainer = styled( GridStyles )`
  box-sizing: border-box;
`;

export const BoardPlayerPointerImg = styled.img`
  position: absolute;
  transform: translate(-50%, 50%) scale(0.5);
  left: 50%;
  top: -38px;
  
  @media (min-width: 480px) {
    top: -48px;
    transform: translate(-50%, 50%) scale(1);
  }
`;

export const Cell = styled.div`
  aspect-ratio: 1;
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