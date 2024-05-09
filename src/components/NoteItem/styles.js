import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    background: ${({ theme, $isnew }) => $isnew === true ? 'transparent' : theme.COLORS.BACKGROUND_900};
    border: ${({ theme, $isnew }) => $isnew === true ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    border-radius: 10px;

    padding: 16px;
    

    width: 180px;   

    > input {
        background: transparent;
        border: none;  
        
        color: white;
        font-size: 16px;    
        
        width: 100%;
    }

    > button {
        background: transparent;
        border: none;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            width: 20px;
            height: 20px;               
            
        }
    }


`;

