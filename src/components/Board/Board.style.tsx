import styled, { css } from 'styled-components';
import { theme } from "../../styles/Theme.style";

const GridStyles = styled.div`
display: grid;
padding-left: 10px;
padding-right: 10px;

@media (min-width: 480px) {
  gap: 24px;
  padding-left: 20px;
  padding-right: 20px;
}
`;

const gap = css`
  gap: 10px;
`;

const columns = css`
  grid-template-columns: repeat(7, 1fr);
`;

const rows = css`
  grid-template-rows: repeat(6, 1fr);
`;

const verticalPadding = css`
padding-top: 10px;
padding-bottom: 32px;

@media (min-width: 480px) {
  padding-top: 20px;
  padding-bottom: 60px;
}
`;

export const ColumnStyle = styled.div`
  display: grid;
  ${ rows }
  ${ gap }
`;

export const LayerGeneralStyles = styled( GridStyles )`
${ gap }
${ rows }
${ columns }
${ verticalPadding }
box-sizing: border-box;
border: 3px solid ${theme.colors.black}; 
border-radius: 30px;
`;

export const LayerEmptyStyles = styled( GridStyles )`
${ gap }
${ columns }
${ verticalPadding }
position: absolute;
left: 0;
top: 0;

width: 100%;
height: 100%;
padding-bottom: 32px;
border: 3px solid ${theme.colors.black};

border-color: transparent;
`;

export const WhiteLayerStyle = styled(LayerGeneralStyles)`
position: absolute;
top: 0;
left: 0;
z-index: 3;

width: 100%;

mix-blend-mode: hard-light;
background: ${theme.colors.white};
pointer-events: none;
`;

export const BlackLayerStyle = styled(LayerGeneralStyles)`
  background: ${theme.colors.black};
  box-shadow: 0 10px 0 ${theme.colors.black};
  z-index: -1;
`;

export const BoardPlayerPointerContainer = styled( GridStyles )`
  display: grid;
  ${ gap }
  ${ columns }
`;

export const BoardPlayerPointerImg = styled.img`
  justify-self: center;

  @media no screen and (min-width: 480px) {
    scale(0.5);
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