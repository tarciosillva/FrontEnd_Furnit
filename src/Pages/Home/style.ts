import styled from "styled-components";

export const ContainerPage = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentNewRequestItem = styled.div`
    width: 25vw;
    height: 25vh;
    border-right: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    .buttonNewRequestItem{
        text-decoration: none;
        color: #ffffff;
        font-weight: 600;
        background-color: #d32f2f;
        padding: 0.75rem;
        border-radius: 0.5rem;

        :hover{
            background-color: #b71c1c;
        }
    }
`

export const ContainerIputEmail = styled.div`
    display: flex;
    background-color: #d32f2f;
    border: 1px solid #b0bec5;
    input{
        border: none;
        padding: 0.5rem;
        font-size: 1rem;
    }
`

export const ContentInputSearchRequestItem = styled.div`
    width: 25vw;
    height: 25vh;
    margin-left: 2rem;
    display: grid;
    justify-content: center;
    align-items: center;

    b{
        font-size: 1.25rem;
    }

    .ButtonSearch{
        display: flex;
        justify-content: center;
        padding: 0.5rem;
    }
`
