import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 8px;

    width: 100%;    

    padding: 16px 0;
    border: none;
    border-radius: 10px;

    background-color: ${({ theme, $isDelete }) => $isDelete ? theme.COLORS.BLACK_100 : theme.COLORS.PINK};
    
    font-size: 16px;
    font-weight: 600;
    color: ${({theme, $isDelete}) => $isDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUN_900};

`;