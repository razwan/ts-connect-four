import styled from 'styled-components';

interface IDiscWrapper {
    size: string;
    color: string;
}

interface  IDiscWinnerWrapper {
    size: string;
}

export const DiscStyle = styled.div<IDiscWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.95px;
  height: 33.95px;
  background: ${(props) => props.color};
  border: 3px solid #000000;
  border-radius: 50%;
  box-shadow: 0 5px 0 #000000, inset 0 6px 0 0 rgba(0, 0, 0, 0.5);
  z-index: 2;
  
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

export const DiscWinner = styled.div<IDiscWinnerWrapper>`
  position: relative;
  top: 2px;
  width: ${(props) => props.size === 'L' ? '34' : '8'}px;
  height: ${(props) => props.size === 'L' ? '34' : '8'}px;
  border: 6px solid #FFFFFF;
  border-radius: 50%;
`;
