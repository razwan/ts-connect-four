import styled from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;

  &.show {
    display: flex;
  }

  &.hide {
    display: none;
  }
`;