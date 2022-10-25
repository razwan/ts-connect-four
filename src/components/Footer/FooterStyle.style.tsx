import styled from 'styled-components';

export const FooterStyle = styled.div`
position: relative;
grid-row: 5;
grid-column: 1 / -1;

display: flex;
justify-content: center;

height: 100%;

&:before {
    content: "";

    position: absolute;
    top: -50px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    background: ${({ theme }) => theme.colors.darkPurple};
}

&.has-winner--player1:before {
    background: ${({ theme }) => theme.colors.pink };
}

&.has-winner--player2:before {
    background: ${({ theme }) => theme.colors.yellow };
}
`;

export const FooterContentStyle = styled.div`
    margin-top: -50px;
    padding-bottom: 50px;
    z-index: 10;
`;
