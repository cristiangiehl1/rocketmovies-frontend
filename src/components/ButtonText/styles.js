import styled from "styled-components";

export const Container = styled.button`
    background: transparent;
    border: none;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: transparent;
        
        color: ${({ theme }) => theme.COLORS.PINK};        
        font-size: 16px;        
    }    
`;