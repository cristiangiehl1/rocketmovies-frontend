import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    overflow-y: scroll;

    padding-right: 24px;   
    
    height: 400px;

    &::-webkit-scrollbar {            
            width: 5px;

        }

    &::-webkit-scrollbar-thumb {
        background-color:${({ theme }) => theme.COLORS.PINK};
        border-radius: 9999px; 
        
    }      

    > .title {
        display: flex;
        text-align: center;       

        h1 {
            font-size: 36px;
            font-weight: 600;            
        }
    }      

    > .movieInfos {
        display: flex;
        gap: 8px;
        align-items: center;

        margin: 24px 0 40px 0;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        span:last-of-type {
            display: flex;
            align-items: center;
            gap: 8px;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }

    > .tags {
        display: flex;
        gap: 8px;       
        
        width: 100%;       

        margin-bottom: 40px;

        span {
            background-color: #282124;
            padding: 8px 16px;
            border-radius: 10px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 12px;
        }
    }

    > p {
        text-align: justify;
        overflow: hidden;      
               
    }   
`;


export const Rating = styled.div`
    display: grid;
    grid-template-columns: repeat(5, max-content);
    gap: 6px;
    place-content: center;
    
    margin-left: 18px;

    > img {
        width: 20px;
        height: 20px;
    }

`