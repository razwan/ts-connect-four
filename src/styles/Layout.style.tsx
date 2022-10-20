import styled from "styled-components";

export const Layout =`
.layout {
    --side-spacing: 20px;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(var(--side-spacing), 1fr) auto minmax(auto, 316px) minmax(auto, 316px) auto minmax(var(--side-spacing), 1fr);
    grid-template-rows: auto auto 1fr 100px;  

    @media only screen and (min-width: 400px) {
        --side-spacing: 5%;
    }

    @media only screen and (min-width: 1360px) {
        --side-spacing: 68px;
    }
}

.layout__header {
    grid-column: 3 / span 2;
}

.layout__game {
    display: flex;
    flex-direction: column;
    justify-content: center;

    grid-row: 3;
    grid-column: 3 / span 2;
}

.layout__scorecard {
    grid-row: 2;

    @media only screen and (min-width: 1140px) {
        grid-row: 3;
        display: flex;
        align-items: center;
    }
}

.layout__scorecard-1 {
    grid-column: 3;

    @media only screen and (min-width: 1140px) {
        grid-column: 2;
        padding-right: 60px;
    }
}

.layout__scorecard-2 {
    grid-column: 4;

    @media only screen and (min-width: 1140px) {
        grid-column: 5;
        padding-left: 60px;
    }
}

.layout__footer {
    grid-row: 4;
    grid-column: 1 / -1;
}
`
