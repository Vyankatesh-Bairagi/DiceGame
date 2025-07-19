import styled from "styled-components"

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 10px;
    gap: 10px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`

export const Outlined = styled(Button)`
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
        
    
`