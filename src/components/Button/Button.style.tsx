import styled from 'styled-components';
export interface IButtonWrapper {
  backgroundColor: string;
  alignment?: 'left' | 'center' | 'right';
}

export const EmphasizedButton = styled.button<IButtonWrapper>`
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  text-align: ${(props) => props.alignment};
  text-transform: uppercase;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  padding: 1.25rem;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.darkPurple};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.darkPurple};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PlainButton = styled.button<IButtonWrapper>`
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  padding: 8px 17px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;