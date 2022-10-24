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
  padding: 45px 40px;

  .start-button-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    position: relative;
    text-align: left;
    margin-top: 25px;
    padding-right: 122px;

    img {
      position: absolute;
      right: 20px;
    }
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    
    h2 {
      font-size: 2rem;
    }
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    border: none;
    box-shadow: none;
    margin-top: 0;
    padding: 0;

    h2 {
      font-size: 1.5rem;
    }
  }
`;