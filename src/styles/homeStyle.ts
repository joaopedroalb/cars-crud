import styled from "styled-components";

export const HomeBG = styled.div`
    width: 100%;
`

export const CardContainer = styled.section`
    width: 100%;
    display:grid;
    place-items: center;
    gap: 2rem 0rem;
    grid-template-columns : repeat(3,1fr);

    @media (max-width: 1254px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 844px) {
        grid-template-columns: repeat(1,1fr);
    }
`