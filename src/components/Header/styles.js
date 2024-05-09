import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    padding: 30px 123px;   

    > h2 {
        font-size: 24px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;


export const Profile = styled.div`
    display: flex;    
    gap: 9px;    

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;        
        
        font-size: 14px;
        line-height: 24px;
        text-align: right;

        white-space: nowrap;
          
        
        button {
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            background-color: transparent;
            border: none;
            text-align: right;
            width: 50%;
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {            
        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
        }

    }
`;