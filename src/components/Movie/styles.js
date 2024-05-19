import styled from "styled-components";

export const Container = styled.button`   
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    width: 98%;

    border: none;
    border-radius: 10px;

    padding: 32px;
    margin-bottom: 24px;
    margin-right: 8px;

    a {

        > h2 {
            flex: 1;
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    
        > p {
            text-align: justify;
            font-size: 16px;
            color: #999591;
            height: 60px;
            overflow: hidden;
            
        }
    
        > footer {
            display: flex;
            gap: 8px;
            
            width: 100%;
            
            margin-top: 15px;
    
            color: white;
    
            span {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                padding: 5px 16px;
                border-radius: 8px;
                font-size: 12px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            } 
        }
    }
`;

export const Rating = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: start;

    margin: 8px 0 15px 0;

`

