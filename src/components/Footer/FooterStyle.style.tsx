import styled from 'styled-components';

export const FooterStyle = styled.div`
position: relative;
grid-row: 5;
grid-column: 1 / -1;
height: 100%;
z-index: -2;

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
`;
