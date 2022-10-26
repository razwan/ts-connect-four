import styled from 'styled-components';

interface IDiscWrapper {
    color: string;
}

export const DiscStyle = styled.div<IDiscWrapper>`
  aspect-ratio: 1;
  background: ${(props) => props.color};
  border: 3px solid #000000;
  border-radius: 50%;
  box-shadow: 0 5px 0 #000000, inset 0 6px 0 0 rgba(0, 0, 0, 0.5);
  z-index: 2;

  position: relative;
  // animation: drop .3s cubic-bezier(0.755, 0.050, 0.855, 0.060) forwards;
`;

export const DiscWinner = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  border: 5px solid #FFFFFF;
  border-radius: 50%;
  aspect-ratio: 1;
`;
