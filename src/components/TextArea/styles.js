import styled from "styled-components";


export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};   
    
    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    text-align: justify;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300}; 
    }

    &:focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 10px; 
    }


`;