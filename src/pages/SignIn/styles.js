import styled from "styled-components";

import backgrounImg from "../../assets/movie.png"

export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;


    > h1 {
        font-size: 48px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.PINK};

    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
        text-align: left;

        

    }

    h2 {
        color: ${({theme}) => theme.COLORS.WHITE};        
        text-align: left;
        font-size: 24px;

        margin: 48px 0;        
    }

    button {
        margin: 24px 0 48px;
    }   
`;

export const BackgroundImg = styled.div`
    flex: 1;
    background: url(${backgrounImg}) no-repeat center center;
    background-size: cover;
`;