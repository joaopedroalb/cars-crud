import styled from "styled-components";


type ComponentProps = {
    isDark:boolean
}

export const NavbarContainer = styled.div<ComponentProps>`
    min-height: 100vh;
    width: 75px;
    max-width: 30%;
    padding: 1.5rem 1rem 2.5rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.isDark ? "var(--white)" : "var(--black)"};
    color: ${props => props.isDark ? "var(--black)" : "var(--white)"};

    .linksContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }

    .linkItem{
        transition: 450ms;
        &:hover{
            color: var(--orange);
        }
    }


`

export const LayoutPageBG = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`

export const PageContainer = styled.div<ComponentProps>`
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    padding: 1rem;

    background-color: ${props => props.isDark ? "var(--black)" : "var(--white)"};
    color: ${props => props.isDark ? "var(--white)" : "var(--black)"};
`

export const Card = styled.div<ComponentProps>`
    width: 350px;
    height: 325px;
    background-color: ${props => props.isDark ? "var(--white)" : "var(--black)"};
    color: ${props => props.isDark ? "var(--black)" : "var(--white)"};
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .cardInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        padding: 1rem;
    }

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .25rem;
        margin-bottom: .5rem;
    }

    .rowText{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .columnSection{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }
`