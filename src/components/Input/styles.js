import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 10px;

    margin-bottom: 8px;

    &:focus-within {
            outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        }

    
    > input {
        width: 100%;
        padding: 19px 0 19px 16px;

        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE};  

        background-color: transparent;

        &::placeholder {
            font-size: 14px;
            font-family: "Roboto Slab", sans-serif;
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-left: 16px;
    }


    .sr-only {
        width: 1px;
        height: 1px;

        position: absolute;
        overflow: hidden;
        display: none;
        border: 0;
        white-space: nowrap;
        clip: rect(1px, 1px, 1px, 1px);

        margin: -1px;
    }

`;