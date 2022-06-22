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
        gap: 1rem;

        .linkItem{
            transition: 400ms;
            &:hover{
                color: var(--green);
            }
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