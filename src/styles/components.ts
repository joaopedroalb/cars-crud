import styled from "styled-components";


type ComponentProps = {
    isDark:boolean
}

type InputProps = {
    width:string
    minWidth?:string
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

    @media (max-width: 844px) {
        width: 50px;
    }

`

export const LayoutPageBG = styled.div`
    width: 100%;
    max-height: 100vh;

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
    max-width: 70%;
    min-height: 340px;
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

    .iconsSection{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .5rem;

        .icon{
            cursor: pointer;
        }
    }
`

export const InputContainer = styled.div<InputProps>`
    
    width: ${props => props.width};
    min-width: ${props => props.minWidth ? props.minWidth : "0px"};

    .input{
        width: 100%;
        border: 1px solid var(--white);
        display: block;
        font-size: 1rem;
        padding: .8rem;
        border-radius: .4rem;
        background: #ddd;

        transition: .1s;
    }

    .input:hover, .input:focus{
        outline: none;
        border-color: var(--orange);
        background:#fff;
        box-shadow: 0 0 0 3px #fea;
    }

    .label{
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: .5rem;
    }

    .error{
        color: var(--red);
        font-size: 0.875rem;
        margin-top: .25rem;
    }
`

export const RowContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: .5rem;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const RowCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    .imgCreate{
        width: 450px;
        height: 300px;
        border-radius: 6px;
    }
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: 6px;
    background-color: var(--orange);
    color: var(--white);

    &:disabled{
        opacity: .65;
    }
`

export const ModalBg = styled.div`
    position: fixed; 
    z-index: 3; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgba(119, 119, 119, 0.8);; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const EditBG = styled.div`
    width: 80%;
    max-height: 100vh;
    overflow: auto;
    margin: 2rem 0;
    background-color: var(--white);
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding: .5rem 1rem;

    @media screen and (max-width: 1295px){
        padding: 0;
    }

    form{
        display: flex;
        flex:1;
        flex-direction: column;
        border-radius: 10px;
        flex-wrap: wrap;

    }


    .row{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 1rem;
        justify-content: center;

        @media screen and (max-width: 1295px){
            flex-direction: column;
            align-items: center;
        }
    }

    img{
        max-width: 90%;
        width: 450px;
        height: 300px;
        border-radius: 6px;

        @media screen and (max-width: 1295px){
           width: 100%;
            max-width: 100%;
        }

        @media screen and (max-width:754px){
            height: calc(30vw + 10px);
        }
    }

    .rightSide{
        max-width: 80%;
        display: flex;
        flex-wrap: wrap;
        width: 75%;
        flex: 1;
        justify-content:flex-start;
        align-items: center;

        @media screen and (max-width: 1295px){
            align-items: flex-end;
            row-gap: 1px;
            column-gap: 6px;

        }

    }

    
`