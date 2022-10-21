import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;

    --vertical-padding: 50px;
    
    padding-top: var(--vertical-padding);
    padding-bottom: var(--vertical-padding); 

    > :last-child {
        display: flex;
        flex-direction: row-reverse;
    }
`;
