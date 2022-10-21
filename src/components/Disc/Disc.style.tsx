import styled from 'styled-components';

interface IDiscWrapper {
    color: string;
}

export const DiscStyle = styled.div<IDiscWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${(props) => props.color};
  border: 3px solid #000000;
  border-radius: 50%;
  box-shadow: 0 5px 0 #000000, inset 0 6px 0 0 rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const DiscWinner = styled.div`
  position: relative;
  top: 2px;
  border: 6px solid #FFFFFF;
  border-radius: 50%;
`;
