import styled from 'styled-components';

export const StartMenuWrapper = styled.div`
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
  width: 40%;
  padding: 45px 40px;

  .start-button-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    margin-bottom: 10px;
  }

  button {
    margin-top: 25px;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    width: 50%;
    
    h2 {
      font-size: 2rem;
    }
  }

  // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
      width: 70%;
    }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: none;
    margin-top: 0;
    padding-top: 20vh;

    h2 {
      font-size: 1.5rem;
    }
  }
`;