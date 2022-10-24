import styled from 'styled-components';

export const PauseMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-align: center;
  height: fit-content;
  margin-top: 20vh;
  padding: 45px 40px;

  button {
    margin-top: 25px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {

    h2 {
      font-size: 2rem;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { 

    h2 {
        font-size: 1.7rem;
      }
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {

    h2 {
      font-size: 1.5rem;
    }
  }
`;