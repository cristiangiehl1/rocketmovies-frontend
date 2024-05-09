import styled from 'styled-components';
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: grid;
    grid-template-rows: max-content max-content 1fr;

    height: 100vh;
    width: 100%;
`;

export const PageTitle = styled.section`
    display: flex;
    justify-content: space-between;

    margin: 40px 123px; 

    > h1 {
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
    }

`

export const Content = styled.div`    
    margin: 0 123px 46px;
    
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 9999px;
    }
`;


export const Linkk = styled(Link)`

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK_300};

    border: none;
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 8px;

    padding: 14px 32px;


    svg {
        color: ${({ theme }) => theme.COLORS.BLACK_300};
    }


`