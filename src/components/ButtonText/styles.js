import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    border: none;
    
    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background-color: transparent;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.PINK};        
        font-size: 16px;        
    }    
`;