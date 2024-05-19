import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: max-content auto;    

    > main {
        overflow-y: scroll;
        margin: 40px 123px 0;
                
        &::-webkit-scrollbar {            
            width: 5px;

        }

        &::-webkit-scrollbar-thumb {
            background-color:${({ theme }) => theme.COLORS.PINK};
            border-radius: 9999px; 
            
        }   

        .backHome {
            width: 50px;
        }
    }
`;

export const Form = styled.form`   
    margin: 0 16px 101px 5px;       


    > h1 {
        font-size: 36px;
        font-weight: 500;
        margin-top: 24px;
        margin-bottom: 40px;
    }               

    > div {
        display: flex;
        gap: 40px;   
        
    }

    > textarea {
        margin: 40px 0;
    }    

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        font-size: 20;
        
        margin-bottom: 24px;
    }
    
    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 16px;

        padding: 16px;

        margin-bottom: 40px;
        background-color: ${({ theme }) => theme.COLORS.BLACK_100};
        
        border-radius: 10px;
    }   
`;